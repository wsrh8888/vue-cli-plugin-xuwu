const Xuwu = require('../utils/xuwu')

class RootConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  /*******
   * @description: 在根路径下添加postcss.config.js文件
   * @param {*}
   * @return {*}
   */
  postcssConfigFile() {
    this.api.render({
      '/postcss.config.js': '../template/root/postcss.config.js'
    })
  }
  envConfigFile() {
    this.api.render({
      '/.env.pre': '../template/root/.env.pre',
      '/.env.prod': '../template/root/.env.prod',
      '/.env.test': '../template/root/.env.test'
    })
  }
}

module.exports = RootConfig
