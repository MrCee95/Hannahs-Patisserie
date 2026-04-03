import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // 🔹 GitHub Pages base path (replace with your repo name)
  base: '/hannahs-patisserie/',
  
  // 🔹 Force Vite to use project-local cache (fixes EPERM error)
  cacheDir: path.resolve(__dirname, '.vite'),
  
  // 🔹 Dev server settings
  server: {
    port: 5173,
    strictPort: true,
    // Optional: open browser automatically
    open: true,
  },
  
  // 🔹 Dependency optimization
  optimizeDeps: {
    exclude: ['large-dependency-if-any'] // Add problematic deps here
  },
  
  // 🔹 Build settings for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true, // Helpful for debugging
    rollupOptions: {
      output: {
        // Ensure proper asset hashing for cache busting
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/css/i.test(extType)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  
  // 🔹 Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
})
