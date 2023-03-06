import { fileURLToPath, URL } from 'node:url'
import ViteRestart from 'vite-plugin-restart'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  ViteRestart({
    restart: [
      'my.config.[jt]s',
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
