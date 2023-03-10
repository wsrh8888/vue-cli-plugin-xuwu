const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
const { EOL } = require('os')
const Fs = require('fs')
const astMainParse = require('../ast/main')

/**
 * @description: main.js/main.ts文件配置
 * @param {*}
 * @return {*}
 */
class Main {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  initVue3() {
    try {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/app.use/)) === -1) {
        throw Error
      }
    } catch (error) {
      let isHasRoute
      let isHasStore
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      isHasRoute =
        lines.findIndex((line) => line.match(/import router from /)) !== -1
      isHasStore =
        lines.findIndex((line) => line.match(/import store from /)) !== -1
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
      Fs.writeFileSync(this.api._entryFile, mainContent, {
        encoding: 'utf-8'
      })
    }
  }
  /**
   * @description: 在main里增加console相关配置代码
   * @param {*} this.api
   * @param {*} options
   * @return {*}
   */
  mainAddVconsole() {
    this.api.afterInvoke(() => {
      const contentMain = Fs.readFileSync(
        this.api.resolve(this.api._entryFile),
        {
          encoding: 'utf-8'
        }
      )
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
        lines[renderIndex] += `${EOL} ${Template.vConsoleVue2()}`
        Fs.writeFileSync(this.api._entryFile, lines.join(EOL), {
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
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        Fs.writeFileSync(this.api._entryFile, lines.join(EOL), {
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
      this.initVue3()
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        Fs.writeFileSync(this.api._entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /*******
   * @description: uniapp在main.ts增加pinia相关配置
   */
  mainAddPiniaUniapp() {
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/pinia/)) === -1) {
        Fs.writeFileSync(
          this.api._entryFile,
          astMainParse.astMainAddPiniaUniapp(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
  mainAddPinia() {
    this.api.afterInvoke(() => {
      this.initVue3()
      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/pinia/)) === -1) {
        Fs.writeFileSync(
          this.api._entryFile,
          astMainParse.astMainAddPinia(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
  mainAddVconsoleVue3() {
    this.api.afterInvoke(() => {
      this.initVue3()

      let contentMain = Fs.readFileSync(this.api.resolve(this.api._entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/vconsole/)) === -1) {
        lines[renderIndex] += `${EOL}  ${Template.vConsoleVue3()}`
        Fs.writeFileSync(this.api._entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = Main
