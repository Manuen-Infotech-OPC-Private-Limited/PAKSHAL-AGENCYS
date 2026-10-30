import Offer from '../Modal/Offers.js';
import Admin from '../Modal/Admin.js';
import mongoose from 'mongoose';

// In-memory fallback state when database is disconnected
let inMemoryOffers = [];
let inMemoryOffersEnabled = true;

// GET /api/offers
export const getOffers = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json(inMemoryOffers);
    }
    const offers = await Offer.find();
    res.json(offers || []);
  } catch (error) {
    console.warn('[Offers Controller] Database unavailable, returning fallback offers:', error.message);
    res.json(inMemoryOffers);
  }
};

// POST /api/offers
export const createOffer = async (req, res) => {
  try {
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    if (mongoose.connection.readyState !== 1) {
      const fallbackOffer = {
        id: `mock-${Date.now()}`,
        title,
        description,
        category: category || 'General',
        badge: badge || 'Limited Time',
        validUntil: validUntil || 'N/A',
        terms: terms || '',
        image: image || '',
        enabled: enabled !== undefined ? !!enabled : true,
        createdAt: new Date().toISOString()
      };
      inMemoryOffers.push(fallbackOffer);
      return res.status(201).json(fallbackOffer);
    }

    const newOffer = new Offer({
      title,
      description,
      category,
      badge,
      validUntil,
      terms,
      image,
      enabled: enabled !== undefined ? !!enabled : true
    });
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/offers/:id
export const updateOffer = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const idx = inMemoryOffers.findIndex(o => o.id === id);
      if (idx !== -1) {
        inMemoryOffers[idx] = {
          ...inMemoryOffers[idx],
          ...(title !== undefined && { title }),
          ...(description !== undefined && { description }),
          ...(category !== undefined && { category }),
          ...(badge !== undefined && { badge }),
          ...(validUntil !== undefined && { validUntil }),
          ...(terms !== undefined && { terms }),
          ...(image !== undefined && { image }),
          ...(enabled !== undefined && { enabled: !!enabled })
        };
        return res.json(inMemoryOffers[idx]);
      }
      return res.status(404).json({ error: 'Offer not found' });
    }

    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(title !== undefined && { title }),
          ...(description !== undefined && { description }),
          ...(category !== undefined && { category }),
          ...(badge !== undefined && { badge }),
          ...(validUntil !== undefined && { validUntil }),
          ...(terms !== undefined && { terms }),
          ...(image !== undefined && { image }),
          ...(enabled !== undefined && { enabled: !!enabled })
        }
      },
      { new: true }
    );
    if (!updatedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/offers/:id
export const deleteOffer = async (req, res) => {
  try {
    const id = req.params.id;
    if (mongoose.connection.readyState !== 1) {
      inMemoryOffers = inMemoryOffers.filter(o => o.id !== id);
      return res.json({ message: 'Offer deleted successfully' });
    }
    const deleted = await Offer.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/offers/status
export const getOffersStatus = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ offersEnabled: inMemoryOffersEnabled });
    }
    let admin = await Admin.findOne();
    if (!admin) {
      return res.json({ offersEnabled: true });
    }
    res.json({ offersEnabled: admin.offersEnabled !== false });
  } catch (error) {
    console.warn('[Offers Controller] Database unavailable, returning fallback status:', error.message);
    res.json({ offersEnabled: inMemoryOffersEnabled });
  }
};

// POST /api/offers/status
export const updateOffersStatus = async (req, res) => {
  try {
    const { offersEnabled } = req.body;
    if (offersEnabled === undefined) {
      return res.status(400).json({ error: 'offersEnabled parameter is required' });
    }
    if (mongoose.connection.readyState !== 1) {
      inMemoryOffersEnabled = !!offersEnabled;
      return res.json({ offersEnabled: inMemoryOffersEnabled });
    }
    let admin = await Admin.findOne();
    if (!admin) {
      admin = new Admin();
    }
    admin.offersEnabled = !!offersEnabled;
    await admin.save();
    res.json({ offersEnabled: admin.offersEnabled });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
