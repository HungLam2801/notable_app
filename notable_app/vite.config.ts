import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      manifest: {
        name: 'Text Editor',
        short_name: 'Editor',
        description: 'A simple text editor',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: '/icon-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/icon-512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
});
