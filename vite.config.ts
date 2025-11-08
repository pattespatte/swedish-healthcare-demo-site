import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/swedish-healthcare-demo-site/' : '/',
  build: {
    outDir: 'dist',
    publicDir: 'public',
    // Ensure search index is copied to dist directory
    rollupOptions: {
      external: [],
      output: {
        // Include search-index.json in build output
        manualChunks(id: string): string[] | undefined {
          if (id === 'search-index') {
            return ['search-index.json']
          }
          return undefined
        }
      }
    }
  },
  ssr: {
    noExternal: []
  },
  css: {
    postcss: './postcss.config.js'
  },
  // Configure development server to serve public directory
  server:
    process.env.NODE_ENV === 'development'
      ? {
          fs: {
            strict: false
          }
        }
      : undefined
})
