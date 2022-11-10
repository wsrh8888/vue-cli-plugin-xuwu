const Xuwu = require('../../utils/xuwu')
const Fs = require('fs')

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
}

module.exports = ViteConfig
