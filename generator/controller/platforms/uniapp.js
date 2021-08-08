/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-08-07 22:51:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.js
 */

const Xuwu = require('../../utils/tools')

class UniappJs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  platformAddUtilsRequest() {
    this.api.render({
      '/src/utils/request.js': '../../module/request/uniapp/request.js',
      '/src/utils/interface.js': '../../module/request/uniapp/interface.js',
      '/src/api/index.js': '../../module/request/uniapp/index.js'
    })
  }
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.js': '../../module/utils/config.js'
    })
  }
}
module.exports = UniappJs
