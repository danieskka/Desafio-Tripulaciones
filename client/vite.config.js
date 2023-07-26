import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: 
      {"/login": "http://localhost:3000",
       "/signup": "http://localhost:3000",
       "/logout": "http://localhost:3000",
       "/quiz": "http://localhost:3000"
      }
  },
})
