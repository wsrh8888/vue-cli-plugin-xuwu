/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-09 16:24:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    platformAddUtilsRequest() {
      api.render({
        '/src/utils/request.js': '../../module/request/uniappJs/request.js',
        '/src/api/index.js': '../../module/request/uniappJs/index.js'
      })
    },
    platformAddUtilsConfig() {
      api.render({
        '/src/utils/config.js': '../../module/utils/config.js'
      })
    }
  }
}
