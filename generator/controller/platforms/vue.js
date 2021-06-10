/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-10 11:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    platformAddUtilsRequest() {
      api.extendPackage({
        dependencies: {
          axios: '^0.21.1'
        }
      })
      api.render({
        '/src/utils/request.js': '../../module/request/webJs/request.js',
        '/src/api/index.js': '../../module/request/webJs/index.js'
      })
    },
    platformAddUtilsConfig() {
      api.render({
        '/src/utils/config.js': '../../module/utils/config.js'
      })
    },
    platformAddPluginsVant() {
      api.render({
        '/src/plugins/vant.js': '../../module/plugins/vant.js'
      })
    },
    platformAddPluginsVantVue3() {
      api.render({
        '/src/plugins/vant.js': '../../module/plugins/vantVue3.js'
      })
    },
    platformAddPluginsElement() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/element.js'
      })
    },
    platformAddUtilsRem() {
      api.render({
        '/src/utils/rem.js': '../../module/utils/rem.js'
      })
    },
    platformAddPluginsElementVue3() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
      })
    }
  }
}
