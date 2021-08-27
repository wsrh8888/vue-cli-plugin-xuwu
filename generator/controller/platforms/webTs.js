const Xuwu = require('../../utils/xuwu')
class WebTs {
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
      '/src/utils/request.ts': '../../module/request/web/request.ts',
      '/src/api/index.ts': '../../module/request/web/index.ts'
    })
  }
  /**
   * @description: 引入全局url相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.ts': '../../module/utils/config.ts'
    })
  }
  /**
   * @description: 引入AntDesignVue3按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesignVue3() {
    this.api.render({
      '/src/plugins/antDesign.ts': '../../module/plugins/antDesignVue3.ts'
    })
  }
  /**
   * @description: 引入AntDesign按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesign() {
    this.api.render({
      '/src/plugins/antDesign.ts': '../../module/plugins/antDesign.ts'
    })
  }
  /**
   * @description: 引入Element按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElement() {
    this.api.render({
      '/src/plugins/element.ts': '../../module/plugins/element.ts'
    })
  }
  /**
   * @description: 引入vant按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVant() {
    this.api.render({
      '/src/plugins/vant.ts': '../../module/plugins/vant.ts'
    })
  }
  /**
   * @description: 引入vant3按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVantVue3() {
    this.api.render({
      '/src/plugins/vant.ts': '../../module/plugins/vantVue3.ts'
    })
  }
  /**
   * @description: 引入移动端适配相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsRem() {
    this.api.render({
      '/src/utils/rem.ts': '../../module/utils/rem.ts'
    })
  }
  /**
   * @description: 引入elementPlus按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElementVue3() {
    this.api.render({
      '/src/plugins/element.ts': '../../module/plugins/elementPlus.ts'
    })
  }
}
module.exports = WebTs
