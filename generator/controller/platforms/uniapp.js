/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-14 20:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api, options) => {
  return {
    addRequest() {
      api.render({
        "/src/utils/request.js":"../../module/uniappJs/request.js",
        "/src/api/index.js":"../../module/uniappJs/index.js"
      })
    }
  }
}