const Xuwu = require('../../utils/xuwu')

class UniappTs {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  platformAddUtilsRequest() {
    this.api.render({
      '/src/utils/request.ts': '../../template/request/uniapp/request.ts',
      '/src/utils/interface.ts': '../../template/request/uniapp/interface.ts',
      '/src/api/index.ts': '../../template/request/uniapp/index.ts'
    })
  }
  platformAddUtilsConfig() {
    this.api.render({
      '/src/utils/config.ts': '../../template/utils/config.ts'
    })
  }
}
module.exports = UniappTs
