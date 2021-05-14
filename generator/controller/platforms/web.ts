/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-14 21:08:29
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
        "/src/utils/request.ts":"../../module/request/webTs/request.ts",
        "/src/api/index.ts": "../../module/request/webTs/index.ts",
      })
    },
    configPlatforms() {
      api.render({
        "/src/utils/config.ts":"../../module/config/index.ts"
      })
    }
  }
}