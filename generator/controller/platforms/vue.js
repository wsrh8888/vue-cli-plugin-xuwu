/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-09 14:35:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    requestPlatforms() {
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
    configPlatforms() {
      api.render({
        '/src/utils/config.js': '../../module/utils/config.js'
      })
    },
    vantUiPlatforms() {
      api.render({
        '/src/plugins/vant.js': '../../module/plugins/vant.js'
      })
    },
    elementUiPlatforms() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/element.js'
      })
    },
    flexiblePlatforms() {
      api.render({
        '/src/utils/rem.js': '../../module/utils/rem.js'
      })
    },
    elementPlusUiPlatforms() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
      })
    }
  }
}
