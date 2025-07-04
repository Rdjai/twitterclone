import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000, // Change if needed
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000
    }
  }
}