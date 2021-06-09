/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:33
 * @LastEditTime: 2021-06-09 14:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/main.js
 */
module.exports = (api) => {
  return {
    /**
     * @description: 在main里增加console相关配置代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    addConsoleOption() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/vconsole/))
        if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
          lines[renderIndex] += `${EOL} if (process.env.API_ENV !== 'prod') { 
            // @ts-ignore
            Vue.use(new VConsole())
          }`
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    /**
     * @description: 初始化入口文件
     * @param {*}
     * @return {*}
     */
    mainInit() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let isHasRoute
        let isHasStore
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        isHasRoute =
          lines.findIndex((line) => line.match(/import router from /)) !== -1
        isHasStore =
          lines.findIndex((line) => line.match(/import router from /)) !== -1
        if (lines.findIndex((line) => line.match(/const app/)) === -1) {
          console.log(55555555)
          let mainContent = `${EOL} 
              import { createApp } from 'vue'
              import App from './App.vue'
              ${isHasRoute ? 'import router from "./router"' : ''}
              ${isHasStore ? 'import store from "./store";' : ''}
              const app = createApp(App)
              ${isHasRoute ? 'app.use(router);' : ''}
              ${isHasStore ? 'app.use(store);' : ''}
              app.mount('#app')
          `
          fs.writeFileSync(api.entryFile, mainContent, {
            encoding: 'utf-8'
          })
        }
      })
    }
  }
}
