const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
const Fs = require('fs')
const { EOL } = require('os')
const astViteParse = require('../ast/vite.config')

class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 判断是否存在babel.config.js文件
   * @param {*}
   * @return {string}
   */
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
    } catch (error) {
      this.api.render({
        [`/vite.config.${Xuwu.getTsOrJs()}`]: `../template/vite.config.${Xuwu.getTsOrJs()}`
      })
    }
  }
  getViteFileName() {
    return `./vite.config.${Xuwu.getTsOrJs()}`
  }
  /**
   * @description: viteConfig.js文件中添加去掉console相关配置
   * @param {*}
   * @return {*}
   */
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
  /**
   * @description: viteConfig.js文件中添加去掉console相关配置
   * @param {*}
   * @return {*}
   */
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
        console.log('contentMain', contentMain)

        Fs.writeFileSync(
          this.getViteFileName(),
          astViteParse.viteConfigRemoveConsole(contentMain),
          {
            encoding: 'utf-8'
          }
        )
      }
    })
  }
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

      const renderIndex = lines.findIndex((line) => line.match(/vue\(\)/))
      if (lines.findIndex((line) => line.match(/element-plus/)) === -1) {
        lines[renderIndex] = lines[renderIndex].replace(
          /vue\(\)/,
          `vue(),${Template.viteElementVue3()}`
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
  viteConfigLess() {
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
}

module.exports = ViteConfig
