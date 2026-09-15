import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo de usuario (jorgeortizbaz.github.io) -> se sirve en la raíz del dominio
export default defineConfig({
  plugins: [react()],
  base: '/',
});