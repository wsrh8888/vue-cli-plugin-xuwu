/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-07-27 10:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    platformAddUtilsRequest() {
      api.render({
        '/src/utils/request.js': '../../module/request/uniapp/request.js',
        '/src/utils/interface.js': '../../module/request/uniapp/interface.js',
        '/src/api/index.js': '../../module/request/uniapp/index.js'
      })
    },
    platformAddUtilsConfig() {
      api.render({
        '/src/utils/config.js': '../../module/utils/config.js'
      })
    }
  }
}
