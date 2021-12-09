import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

function baseUrl({ mode, command }) {
  const env = loadEnv(mode, __dirname)
  let base = './'
  if (command === 'build' && env.VITE_API_ENV === 'test') {
    base = './'
  } else if (command === 'build' && env.VITE_API_ENV === 'prod') {
    base = './'
  } else if (command === 'build' && env.VITE_API_ENV === 'pre') {
    base = './'
  } else {
    base = './'
  }
  return base
}

export default defineConfig(({ mode, command }) => ({
  plugins: [vue()],
  base: baseUrl({ mode, command }),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
