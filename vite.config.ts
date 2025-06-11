
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-scroll-area'],
          'query-vendor': ['@tanstack/react-query'],
          'animation-vendor': ['lucide-react'],
          
          // App chunks
          'home-pages': [
            './src/pages/EnhancedHome.tsx',
            './src/pages/Home.tsx',
            './src/components/home/EnhancedHeroSection.tsx',
            './src/components/home/AppShowcaseSection.tsx'
          ],
          'corporate-pages': [
            './src/pages/CorporateWellness.tsx',
            './src/pages/ForCompanies.tsx'
          ],
          'event-pages': [
            './src/pages/Events.tsx',
            './src/components/EventHeroSection.tsx'
          ]
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify for production
    minify: mode === 'production' ? 'terser' : false,
    // Generate source maps for debugging
    sourcemap: mode === 'development',
    // Target modern browsers for smaller bundles
    target: 'es2020'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ],
    exclude: [
      // Exclude large dependencies that don't need optimization
    ]
  },
  // CSS optimization
  css: {
    devSourcemap: mode === 'development',
    // PostCSS plugins for optimization
    postcss: {
      plugins: mode === 'production' ? [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default'
        })
      ] : []
    }
  }
}));
