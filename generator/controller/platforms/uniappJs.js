const Xuwu = require('../../utils/xuwu')

class UniappJs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  platformAddUtilsRequest() {
    this.api.render({
      '/src/utils/request.js': '../../template/request/uniapp/request.js',
      '/src/utils/interface.js': '../../template/request/uniapp/interface.js',
      '/src/api/index.js': '../../template/request/uniapp/index.js'
    })
  }
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.js': '../../template/utils/config.js'
    })
  }
}
module.exports = UniappJs
