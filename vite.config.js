import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ...
    rollupOptions: {
      // ...
    },
    // Nonaktifkan ESLint dengan mengatur properti ini menjadi false
    eslint: false,
  },
  server: {
    // Nonaktifkan ESLint di server development dengan mengatur properti ini menjadi false
    open: false,
    // ...
  },
})
