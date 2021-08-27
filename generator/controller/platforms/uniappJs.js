const Xuwu = require('../../utils/xuwu')

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
