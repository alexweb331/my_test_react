import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_test_react', // для GitHub Pages используйте '/репозиторий/'
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
