const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
const Fs = require('fs')
const { EOL } = require('os')
const astViteParse = require('../ast/vite.config')
class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  fileInit() {
    let contentMain
    try {
      contentMain = Fs.readFileSync(this.api.resolve(this.getViteFileName()), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/export default defineConfig/)) ===
        -1
      ) {
        throw Error
      }
      // 判断vite.config.js 中是否是 =>的写法
      if (!astViteParse.astViteConfigIsInit(contentMain)) {
        throw Error
      }
    } catch (error) {
      this.api.render({
        [`/vite.config.${Xuwu.getTsOrJs()}`]: `../template/vite.config.${Xuwu.getTsOrJs()}`
      })
    }
  }
  getViteFileName() {
    return `./vite.config.${Xuwu.getTsOrJs()}`
  }
  viteConfigAddAntDesign() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/vue\(\)/))
      if (lines.findIndex((line) => line.match(/ant-design-vue/)) === -1) {
        lines[renderIndex] = lines[renderIndex].replace(
          /vue\(\)/,
          `vue(),${Template.viteAntDeginVue3()}`
        )
        if (
          lines.findIndex((line) => line.match(/vite-plugin-style-import/)) ===
          -1
        ) {
          lines[1] += `${EOL} import styleImport from 'vite-plugin-style-import';`
        }
        Fs.writeFileSync(this.getViteFileName(), lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  viteConfigRemoveConsole() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/drop_console/)) === -1) {
        Fs.writeFileSync(
          this.getViteFileName(),
          astViteParse.astViteConfigRemoveConsole(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
  /******* 
   * @description: vite.config.ts 引入按需的相关代码
   */  
  viteConfigAddElement() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/unplugin-element-plus\/vite/)) === -1) {
        Fs.writeFileSync(
          this.getViteFileName(),
          astViteParse.astViteConfigAddElementPlus(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
  viteConfigLess() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/export default defineConfig\(\(\{/)
      )
      if (lines.findIndex((line) => line.match(/less/)) === -1) {
        lines[renderIndex] += `${EOL} ${Template.viteLess()},`
        Fs.writeFileSync(this.getViteFileName(), lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  viteConfigAddVant() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) => line.match(/vue\(\)/))
      if (lines.findIndex((line) => line.match(/vant/)) === -1) {
        lines[renderIndex] = lines[renderIndex].replace(
          /vue\(\)/,
          `vue(),${Template.viteVantVue3()}`
        )
        if (
          lines.findIndex((line) => line.match(/vite-plugin-style-import/)) ===
          -1
        ) {
          lines[1] += `${EOL} import styleImport from 'vite-plugin-style-import';`
        }
        Fs.writeFileSync(this.getViteFileName(), lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  viteConfigSvgLoader() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(
        this.api.resolve(this.getViteFileName()),
        {
          encoding: 'utf-8'
        }
      )
      let lines = contentMain.split(/\r?\n/g)

      if (lines.findIndex((line) => line.match(/vite-svg-loader/)) === -1) {
        Fs.writeFileSync(
          this.getViteFileName(),
          astViteParse.astViteConfigAddSvgLoader(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
}
module.exports = ViteConfig
