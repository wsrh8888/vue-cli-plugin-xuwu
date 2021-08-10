/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:33
 * @LastEditTime: 2021-08-10 10:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/main.js
 */
const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
const { EOL } = require('os')
const Fs = require('fs')

/**
 * @description: main.js/main.ts文件配置
 * @param {*}
 * @return {*}
 */
class Main {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 在main里增加console相关配置代码
   * @param {*} this.api
   * @param {*} options
   * @return {*}
   */
  mainAddVconsole() {
    this.api.afterInvoke(() => {
      const contentMain = Fs.readFileSync(
        this.api.resolve(this.api.entryFile),
        {
          encoding: 'utf-8'
        }
      )
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
        lines[renderIndex] += `${EOL} ${Template.vConsoleVue2()}`
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 初始化入口文件,vue3专用
   * @param {*}
   * @return {*}
   */
  mainInit() {
    this.api.afterInvoke(() => {
      let isHasRoute
      let isHasStore
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      isHasRoute =
        lines.findIndex((line) => line.match(/import router from /)) !== -1
      isHasStore =
        lines.findIndex((line) => line.match(/import router from /)) !== -1
      if (lines.findIndex((line) => line.match(/const app/)) === -1) {
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
        Fs.writeFileSync(this.api.entryFile, mainContent, {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加引入Rem相关内容
   * @param {*}
   * @return {*}
   */
  mainAddRem() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加引入Rem相关内容，vue3专用
   * @param {*}
   * @return {*}
   */
  mainAddRemVue3() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddVconsoleVue3() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/vconsole/)) === -1) {
        lines[renderIndex] += `${EOL}  ${Template.vConsoleVue3()}`
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加Element相关引入内容,vue3专用
   * @param {*}
   * @return {*}
   */
  mainAddElementVue3() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/import element/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import element from './plugins/element'
          app.use(element)
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加Element相关引入内容
   * @param {*}
   * @return {*}
   */
  mainAddElement() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/element/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import './plugins/element'
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加vant相关引入内容
   * @param {*}
   * @return {*}
   */
  mainAddVant() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/vant/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import './plugins/vant'
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在入口文件增加vant相关引入内容，vue3专用
   * @param {*}
   * @return {*}
   */
  mainAddVantVue3() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/import vant/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import vant from './plugins/vant'
          app.use(vant)
        `
        Fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = Main
