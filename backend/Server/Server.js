import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from backend/.env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import Admin from '../Modal/Admin.js';
import Collection from '../Modal/Collection.js';
import offersRoutes from '../Routes/offersRoutes.js';
import uploadRoutes from '../Routes/uploadRoutes.js';
import collectionsRoutes from '../Routes/collectionsRoutes.js';
import { DEFAULT_COLLECTIONS } from '../Controllers/collectionsController.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists relative to this file
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve uploads statically
app.use('/uploads', express.static(uploadsDir));

const seedDefaults = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      await Admin.create({
        email: 'admin@pakshal.com',
        password: 'admin@pakshal',
        passcode: 'admin123',
        offersEnabled: true
      });
      console.log('Default administrator created successfully.');
    }

    const collectionCount = await Collection.countDocuments();
    if (collectionCount === 0) {
      await Collection.insertMany(DEFAULT_COLLECTIONS);
      console.log('Default collections seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding database defaults:', err);
  }
};

// Connect to MongoDB if MONGO_URI is set
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, { dbName: 'Pakshal_Agencys' })
    .then(() => {
      console.log('Connected to MongoDB successfully to database: Pakshal_Agencys');
      seedDefaults();
    })
    .catch((err) => {
      console.warn('[MongoDB Warning] Could not connect to MongoDB:', err.message);
      console.warn('Backend is running in fallback mode using default collections and offers.');
    });
} else {
  console.log('[Notice] MONGO_URI is not set in backend/.env. Running with default in-memory fallback.');
}

// Admin Authentication endpoints
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (mongoose.connection.readyState !== 1) {
      // Default fallback login if database is offline
      if (email === 'admin@pakshal.com' && password === 'admin@pakshal') {
        return res.json({ success: true });
      }
      return res.status(401).json({ success: false, error: 'Invalid email or password.' });
    }
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid email or password.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/admin/verify-passcode', async (req, res) => {
  try {
    const { passcode } = req.body;
    if (mongoose.connection.readyState !== 1) {
      if (passcode === 'admin123') {
        return res.json({ success: true });
      }
      return res.status(401).json({ success: false, error: 'Invalid passcode.' });
    }
    const admin = await Admin.findOne({ passcode });
    if (admin) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid passcode.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Mount modular routes
app.use('/api/offers', offersRoutes);
app.use('/api/collections', collectionsRoutes);
app.use('/api', uploadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: "success",
    message: "Pakshal Agencies Backend Server is healthy",
    database: mongoose.connection.readyState === 1 ? "connected" : "fallback"
  });
});

// Root route handler for server status
app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Pakshal Agencies Backend Server is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "fallback"
  });
});

// Determine host: bind to '0.0.0.0' to accept IPv4/IPv6 loopback connections reliably
const host = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, host, () => {
  console.log(`\nServer is running:`);
  console.log(`  - Local:   http://localhost:${PORT}`);

  try {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
      const iface = interfaces[devName];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          console.log(`  - Network: http://${alias.address}:${PORT}`);
        }
      }
    }
  } catch {
    // Ignore network interface enumeration errors
  }
  console.log('');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[Server Warning] Port ${PORT} is already in use.`);
    console.error(`A backend server instance appears to already be running on port ${PORT}.\n`);
  } else {
    console.error('Server error:', err);
  }
});
