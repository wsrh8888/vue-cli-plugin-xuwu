/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-08-09 14:09:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.js
 */

const Xuwu = require('../../utils/tools')

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
    this.api.render({
      '/src/utils/request.js': '../../module/request/web/request.js',
      '/src/this.api/index.js': '../../module/request/web/index.js'
    })
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
