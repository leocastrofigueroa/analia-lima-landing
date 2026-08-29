import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(directory, 'index.html'),
        contacto: resolve(directory, 'contacto.html'),
      },
    },
  },
});
