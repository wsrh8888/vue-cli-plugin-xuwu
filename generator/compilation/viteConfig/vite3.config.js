const Xuwu = require('../../utils/xuwu')
// const Template = require('../../static/template')
const astViteParse = require('../../ast/vite.config')
const ViteConfig = require('./vite.config')
class Vite3Config extends ViteConfig {
  fileInit() {
    try {
      let contentMain = this.getContentViteConfig()
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
  }
}
module.exports = Vite3Config
