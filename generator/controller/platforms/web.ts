/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-08-07 23:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.ts
 */

const Xuwu = require('../../utils/tools')
class WebTs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  platformAddUtilsRequest() {
    this.api.extendPackage({
      dependencies: {
        axios: '^0.21.1'
      }
    })
    this.api.render({
      '/src/utils/request.ts': '../../module/request/web/request.ts',
      '/src/this.api/index.ts': '../../module/request/web/index.ts'
    })
  }
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.ts': '../../module/utils/config.ts'
    })
  }
  platformAddPluginsElement() {
    this.api.render({
      '/src/plugins/element.ts': '../../module/plugins/element.ts'
    })
  }
  platformAddPluginsVant() {
    this.api.render({
      '/src/plugins/vant.ts': '../../module/plugins/vant.ts'
    })
  }
  platformAddPluginsVantVue3() {
    this.api.render({
      '/src/plugins/vant.ts': '../../module/plugins/vantVue3.ts'
    })
  }
  platformAddUtilsRem() {
    this.api.render({
      '/src/utils/rem.ts': '../../module/utils/rem.ts'
    })
  }
  platformAddPluginsElementVue3() {
    this.api.render({
      '/src/plugins/element.ts': '../../module/plugins/elementPlus.ts'
    })
  }
}
module.exports = WebTs
