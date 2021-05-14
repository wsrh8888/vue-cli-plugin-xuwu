/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-14 21:08:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api, options) => {
  return {
    requestPlatforms() {
      api.render({
        "/src/utils/request.ts":"../../module/uniappTs/request.ts",
        "/src/utils/interface.ts":"../../module/uniappTs/interface.ts",
        "/src/api/index.ts":"../../module/uniappTs/index.ts"
      })
    },
    configPlatforms() {
      api.render({
        "/src/utils/config.ts":"../../module/config/index.ts"
      })
    }
  }
}