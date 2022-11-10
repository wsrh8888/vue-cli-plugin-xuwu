import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig(({mode, command}) => ({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
