/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-08-08 12:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.js
 */

const Xuwu = require('../../utils/tools')

class WebJs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
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
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.js': '../../module/utils/config.js'
    })
  }
  platformAddPluginsVant() {
    this.api.render({
      '/src/plugins/vant.js': '../../module/plugins/vant.js'
    })
  }
  platformAddPluginsVantVue3() {
    this.api.render({
      '/src/plugins/vant.js': '../../module/plugins/vantVue3.js'
    })
  }
  platformAddPluginsElement() {
    this.api.render({
      '/src/plugins/element.js': '../../module/plugins/element.js'
    })
  }
  platformAddUtilsRem() {
    this.api.render({
      '/src/utils/rem.js': '../../module/utils/rem.js'
    })
  }
  platformAddPluginsElementVue3() {
    this.api.render({
      '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
    })
  }
}
module.exports = WebJs
