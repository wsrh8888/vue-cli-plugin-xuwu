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
    this.viteConfigCommonAddEnv()
  }
  viteConfigRemoveConsole() {
    this.fileInit()
    this.viteConfigCommonRemoveConsole()
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigAddElement() {
    this.fileInit()
    this.viteConfigCommonElement()
  }
  viteConfigAddAntDesign() {
    this.fileInit()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigSvgLoader() {
    this.fileInit()
    this.viteConfigCommonSvgLoader()
  }
  viteConfigAddVant() {
    this.fileInit()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigVisualizer() {
    this.fileInit()
    this.viteConfigCommonVisualizer()
  }
}
module.exports = Vite3Config
