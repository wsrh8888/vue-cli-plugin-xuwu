const Xuwu = require('../../utils/xuwu')
// const Template = require('../../static/template')
const astViteParse = require('../../ast/vite.config')
const ViteConfig = require('./vite.config')
class Vite3Config extends ViteConfig {
  fileInit() {
    try {
      let contentMain = this.getViteConfigContent()
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
   * @description: 增加环境变量
   */
  addEnvConfig() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/baseUrl\(/)) === -1) {
        // 如果没有则进行ast处理
        // 1、增加baseUrl方法
        // 2、在defineConfig中调用baseUrl方法
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddBaseUrl(contentMain)
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
  viteConfigSvgLoader() {
    this.fileInit()
    this.viteConfigCommonSvgLoader()
  }
}
module.exports = Vite3Config