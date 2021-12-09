const Xuwu = require('../../utils/xuwu')

/**
 * @description: 平台相关的webJS
 * @param {*}
 * @return {void}
 */
class WebJs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 添加ajax请求相关的依赖和默认配置
   * @param {*}
   * @return {void}
   */
  platformAddUtilsRequest() {
    this.api.extendPackage({
      dependencies: {
        axios: '^0.21.1'
      }
    })
    if (Xuwu.getBuildToolName() === 'vite') {
      this.api.render({
        '/src/utils/request.js': '../../module/request/web/request.js',
        '/src/api/index.js': '../../module/request/web/indexVite.js'
      })
    } else {
      this.api.render({
        '/src/utils/request.js': '../../module/request/web/request.js',
        '/src/api/index.js': '../../module/request/web/index.js'
      })
    }
  }
  /**
   * @description: 引入全局url相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.js': '../../module/utils/config.js'
    })
  }

  /**
   * @description: 引入AntDesignVue3按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesignVue3() {
    this.api.render({
      '/src/plugins/antDesign.js': '../../module/plugins/antDesignVue3.js'
    })
  }
  /**
   * @description: 引入AntDesign按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesign() {
    this.api.render({
      '/src/plugins/antDesign.js': '../../module/plugins/antDesign.js'
    })
  }
  /**
   * @description: 引入vant按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVant() {
    this.api.render({
      '/src/plugins/vant.js': '../../module/plugins/vant.js'
    })
  }
  /**
   * @description: 引入vant3按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVantVue3() {
    this.api.render({
      '/src/plugins/vant.js': '../../module/plugins/vantVue3.js'
    })
  }
  /**
   * @description: 引入Element按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElement() {
    this.api.render({
      '/src/plugins/element.js': '../../module/plugins/element.js'
    })
  }
  /**
   * @description: 引入移动端适配相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsRem() {
    this.api.render({
      '/src/utils/rem.js': '../../module/utils/rem.js'
    })
  }
  /**
   * @description: 引入elementPlus按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElementVue3() {
    this.api.render({
      '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
    })
  }
}
module.exports = WebJs
