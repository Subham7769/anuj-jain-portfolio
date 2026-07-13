import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Tailwind 4 runs as a Vite plugin — no tailwind.config.js needed.
// Theme tokens live in src/styles/global.css under @theme.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Keep the heavy 3D stack in its own chunk so the lazy-loaded
        // hero scene doesn't bloat the initial bundle.
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
});
