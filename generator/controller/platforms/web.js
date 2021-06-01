/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-31 20:16:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api, options) => {
  return {
    requestPlatforms() {
      api.extendPackage({
        dependencies: {
          'axios': '^0.21.1'
        }
      })
      api.render({
        "/src/utils/request.js":"../../module/request/webJs/request.js",
        "/src/api/index.js": "../../module/request/webJs/index.js",
      })
    },
    configPlatforms() {
      api.render({
        "/src/utils/config.js":"../../module/config/index.js"
      })
    },
    elementUiPlatforms() {
      api.render({
        "/src/plugins/element.js":"../../module/ui/element.js"
      })
    },
    
  }
}