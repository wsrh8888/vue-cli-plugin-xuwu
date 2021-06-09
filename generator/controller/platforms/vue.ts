/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-09 14:27:14
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
        '/src/utils/request.ts': '../../module/request/webTs/request.ts',
        '/src/api/index.ts': '../../module/request/webTs/index.ts'
      })
    },
    configPlatforms() {
      api.render({
        '/src/utils/config.ts': '../../module/utils/config.ts'
      })
    },
    elementUiPlatforms() {
      api.render({
        '/src/plugins/element.ts': '../../module/plugins/element.ts'
      })
    },
    vantUiPlatforms() {
      api.render({
        '/src/plugins/vant.ts': '../../module/plugins/vant.ts'
      })
    },
    flexiblePlatforms() {
      api.render({
        '/src/utils/rem.ts': '../../module/utils/rem.ts'
      })
    },
    elementPlusUiPlatforms() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
      })
    }
  }
}
