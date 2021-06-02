/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-05-18 19:51:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    requestPlatforms() {
      api.render({
        '/src/utils/request.js': '../../module/request/uniappJs/request.js',
        '/src/api/index.js': '../../module/request/uniappJs/index.js'
      })
    },
    configPlatforms() {
      api.render({
        '/src/utils/config.js': '../../module/config/index.js'
      })
    }
  }
}
