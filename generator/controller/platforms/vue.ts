/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-10 10:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.ts
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
        '/src/utils/request.ts': '../../module/request/webTs/request.ts',
        '/src/api/index.ts': '../../module/request/webTs/index.ts'
      })
    },
    platformAddUtilsConfig() {
      api.render({
        '/src/utils/config.ts': '../../module/utils/config.ts'
      })
    },
    platformAddPluginsElement() {
      api.render({
        '/src/plugins/element.ts': '../../module/plugins/element.ts'
      })
    },
    platformAddPluginsVant() {
      api.render({
        '/src/plugins/vant.ts': '../../module/plugins/vant.ts'
      })
    },
    platformAddUtilsRem() {
      api.render({
        '/src/utils/rem.ts': '../../module/utils/rem.ts'
      })
    },
    platformAddPluginsElementVue3() {
      api.render({
        '/src/plugins/element.ts': '../../module/plugins/elementPlus.ts'
      })
    }
  }
}
