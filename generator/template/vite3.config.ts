import { defineConfig } from 'vite'

export default defineConfig(({ mode, command }) => ({
  plugins: [],
  base: './',
  resolve: {},
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
}))
