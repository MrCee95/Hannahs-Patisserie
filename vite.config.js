import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  base: '/Hannahs-Patisserie/',  // ← Add/verify this line
  
  cacheDir: path.resolve(__dirname, '.vite'),
  server: { port: 3000, strictPort: false, open: true },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|webp|avif/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});