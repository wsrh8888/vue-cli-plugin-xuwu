import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig(({ mode, command }) => ({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },

      { find: /^@xuwu-utils/, replacement: path.join(__dirname, '../packages/utils/src/index.ts') }
    ]
  },
  server: {
    host: '0.0.0.0'
  }
}))
