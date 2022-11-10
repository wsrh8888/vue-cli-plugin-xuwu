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
    Fs.writeFileSync(this.getViteFileName(), code, {
      encoding: 'utf-8'
    })
  }
  getViteConfigContent() {
    return Fs.readFileSync(this.api.resolve(this.getViteFileName()), {
      encoding: 'utf-8'
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
}

module.exports = ViteConfig
