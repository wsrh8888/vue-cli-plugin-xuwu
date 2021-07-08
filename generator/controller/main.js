/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:33
 * @LastEditTime: 2021-07-08 19:55:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/main.js
 */
module.exports = (api) => {
  return {
    /**
     * @description: 在main里增加console相关配置代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    mainAddVconsole() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
        if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
          lines[renderIndex] += `${EOL} 
          import VConsole from 'vconsole'
          if (process.env.API_ENV !== 'prod') { 
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
    },
    mainAddRem() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
        if (lines.findIndex((line) => line.match(/rem/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import 'lib-flexible/flexible'
            import './utils/rem'
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddRemVue3() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/const app/))
        if (lines.findIndex((line) => line.match(/rem/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import 'lib-flexible/flexible'
            import './utils/rem'
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddVconsoleVue3() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
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
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddElementVue3() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/const app/))
        if (lines.findIndex((line) => line.match(/import element/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import element from './plugins/element'
            app.use(element)
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddElement() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
        if (lines.findIndex((line) => line.match(/element/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import './plugins/element'
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddVant() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/new Vue/)) - 1
        if (lines.findIndex((line) => line.match(/vant/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import './plugins/vant'
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    mainAddVantVue3() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/const app/))
        if (lines.findIndex((line) => line.match(/import vant/)) === -1) {
          lines[renderIndex] += `${EOL} 
            import vant from './plugins/vant'
            app.use(vant)
          `
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    }
  }
}
