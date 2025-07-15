import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'くとルタ',
        short_name: 'くとルタ',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#B04D5D',
        icons: [
          {
            src: '/img/pwa.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/iphone.png',
            sizes: '192x192',
            type: 'image/png',
          }
        ]
      }
    })
  ]
});
