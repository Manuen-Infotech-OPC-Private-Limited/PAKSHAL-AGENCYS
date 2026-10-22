import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/PAKSHAL-AGENCYS/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    watch: {
      ignored: ['**/backend/**']
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.warn(`[Vite Proxy] Warning: Could not reach backend at ${options.target}${req.url}. Is the backend server running on port 5000?`);
            if (res.writeHead && !res.headersSent) {
              res.writeHead(502, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                error: 'Backend server is offline. Please make sure the backend is running (run "npm run server" or "npm run dev").'
              }));
            }
          });
        }
      },
      '/uploads': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
