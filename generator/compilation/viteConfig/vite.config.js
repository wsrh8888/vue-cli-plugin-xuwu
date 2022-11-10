const Xuwu = require('../../utils/xuwu')

/**
 * @description: 在vue.config里增加适配相关代码
 * @param {*}
 * @return {void}
 */
class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
}

module.exports = ViteConfig
