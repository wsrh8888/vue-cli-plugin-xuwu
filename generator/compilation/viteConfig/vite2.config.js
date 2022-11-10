const Xuwu = require('../../utils/xuwu')
const Template = require('../../static/template')
const { EOL } = require('os')
const astViteParse = require('../../ast/vite.config')
const ViteConfig = require('./vite.config')
class Vite2Config extends ViteConfig {
  fileInit() {
    try {
      let contentMain = this.getViteConfigContent()
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
        [`/vite.config.${Xuwu.getTsOrJs()}`]: `../../template/viteConfig/vite3.config.${Xuwu.getTsOrJs()}`
      })
    }
  }
  /*******
   * @description: 增加环境变量的基础配置
   */
  addEnvConfig() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/env.VITE_API_ENV/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddEnv(contentMain)
        )
      }
    })
  }
  viteConfigAddAntDesign() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
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
        this.writeViteConfigContent(lines.join(EOL))
      }
    })
  }
  viteConfigRemoveConsole() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/drop_console/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigRemoveConsole(contentMain)
        )
      }
    })
  }
  viteConfigVisualizer() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/rollup-plugin-visualizer/)) === -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigVisualizer(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigAddElement() {
    this.fileInit()
    this.viteConfigCommonElement()
  }
  viteConfigLess() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/export default defineConfig\(\(\{/)
      )
      if (lines.findIndex((line) => line.match(/less/)) === -1) {
        lines[renderIndex] += `${EOL} ${Template.viteLess()},`
        this.writeViteConfigContent(lines.join(EOL))
      }
    })
  }
  viteConfigAddVant() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
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
        this.writeViteConfigContent(lines.join(EOL))
      }
    })
  }
  viteConfigSvgLoader() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)

      if (lines.findIndex((line) => line.match(/vite-svg-loader/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddSvgLoader(contentMain)
        )
      }
    })
  }
}
module.exports = Vite2Config
