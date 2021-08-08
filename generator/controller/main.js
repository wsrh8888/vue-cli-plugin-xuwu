/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:33
 * @LastEditTime: 2021-08-07 22:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/main.js
 */
const Xuwu = require('../utils/tools')
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
      const { EOL } = require('os')
      const fs = require('fs')
      const contentMain = fs.readFileSync(
        this.api.resolve(this.api.entryFile),
        {
          encoding: 'utf-8'
        }
      )
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
        lines[renderIndex] += `${EOL} 
        import VConsole from 'vconsole'
        if (process.env.API_ENV !== 'prod') { 
          // @ts-ignore
          Vue.use(new VConsole())
        }`
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 初始化入口文件
   * @param {*}
   * @return {*}
   */
  mainInit() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let isHasRoute
      let isHasStore
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
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
        fs.writeFileSync(this.api.entryFile, mainContent, {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddRem() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddRemVue3() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/rem/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import 'lib-flexible/flexible'
          import './utils/rem'
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddVconsoleVue3() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/vconsole/)) === -1) {
        lines[renderIndex] += `${EOL}  
          import VConsole from 'vconsole'
          if (process.env.API_ENV !== 'prod') {
            // @ts-ignore
            app.use(new VConsole())
          }
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddElementVue3() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/import element/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import element from './plugins/element'
          app.use(element)
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddElement() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/element/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import './plugins/element'
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddVant() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
      if (lines.findIndex((line) => line.match(/vant/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import './plugins/vant'
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  mainAddVantVue3() {
    this.api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain = fs.readFileSync(this.api.resolve(this.api.entryFile), {
        encoding: 'utf-8'
      })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/const app/))
      if (lines.findIndex((line) => line.match(/import vant/)) === -1) {
        lines[renderIndex] += `${EOL} 
          import vant from './plugins/vant'
          app.use(vant)
        `
        fs.writeFileSync(this.api.entryFile, lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = Main
