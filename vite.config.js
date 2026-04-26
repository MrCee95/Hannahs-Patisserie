import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  
  base: '/hannahs-patisserie/',
  
  build: {
    outDir: 'dist',
    emptyOutDir: true, 
    sourcemap: true,
  },
  
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@data': '/src/data',
    },
  },
});