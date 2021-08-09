/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-08-07 23:06:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/controller/controller.ts
 */
const Xuwu = require('../../utils/tools')

class UniappTs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  platformAddUtilsRequest() {
    this.api.render({
      '/src/utils/request.ts': '../../module/request/uniapp/request.ts',
      '/src/utils/interface.ts': '../../module/request/uniapp/interface.ts',
      '/src/api/index.ts': '../../module/request/uniapp/index.ts'
    })
  }
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.ts': '../../module/utils/config.ts'
    })
  }
}
module.exports = UniappTs
