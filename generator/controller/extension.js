const Xuwu = require('../utils/xuwu')

class Extension {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  /*******
   * @description: 在根路径下添加postcss.config.js文件
   * @param {*}
   * @return {*}
   */
  postcssConfigFile() {
    this.api.render({
      '/postcss.config.js': '../module/postcss.config.js'
    })
  }
}

module.exports = Extension
