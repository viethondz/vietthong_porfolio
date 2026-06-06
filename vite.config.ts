import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: '/vietthong_porfolio/', // Dòng này giúp chạy đúng trên GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
