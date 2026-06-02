import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './Appartamento-San-Giovanni/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dintorni: resolve(__dirname, 'dintorni.html'),
        contatti: resolve(__dirname, 'contatti.html'),
      },
    },
  server: {
    host: true,
    allowedHosts: 'all',
  },
  logLevel: 'info',
  },
});

