import { defineConfig } from 'vite'

export default ({ command, mode }) => {
  return defineConfig({
    plugins: [],
    base: './',
    resolve: {},
    server: {
      port: 8080,
      host: '0.0.0.0'
    }
  })
}
