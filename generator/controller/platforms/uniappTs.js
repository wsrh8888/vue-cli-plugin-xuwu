const Xuwu = require('../../utils/xuwu')

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
