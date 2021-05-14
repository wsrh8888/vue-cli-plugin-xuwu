/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-14 20:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api, options) => {
  return {
    addRequest() {
      api.render({
        "/utils/request.ts":"../../module/uniappTs/request.ts",
        "/utils/interface.ts":"../../module/uniappTs/interface.ts",
        "/api/index.ts":"../../module/uniappTs/index.ts"
      })
    }
  }
}