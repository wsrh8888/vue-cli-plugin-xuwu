const Xuwu = require('../../utils/xuwu')
const Fs = require('fs')
const astViteParse = require('../../ast/vite.config')

/**
 * @description: 在vue.config里增加适配相关代码
 * @param {*}
 * @return {void}
 */
class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  getViteFileName() {
    return `./vite.config.${Xuwu.getTsOrJs()}`
  }
  writeViteConfigContent(code) {
    console.log('123123123123123')

    Fs.writeFileSync(this.getViteFileName(), code, {
      encoding: 'utf-8'
    })
  }
  getViteConfigContent() {
    return Fs.readFileSync(this.api.resolve(this.getViteFileName()), {
      encoding: 'utf-8'
    })
  }
  viteConfigCommonRemoveConsole() {
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
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigCommonElement() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/unplugin-element-plus\/vite/)) ===
        -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddElementPlus(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 增加svg laoder相关内容
   */
  viteConfigCommonSvgLoader() {
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
  viteConfigCommonVisualizer() {
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
  viteConfigCommonantStyleImportant() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/vite-plugin-style-import/)) === -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddStyleImportant(contentMain)
        )
      }
    })
  }
  viteConfigCommonAddEnv() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/baseUrl\(/)) === -1) {
        // 1、增加baseUrl方法
        // 2、在defineConfig中调用baseUrl方法
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddBaseUrl(contentMain)
        )
      }
    })
  }
}

module.exports = ViteConfig
