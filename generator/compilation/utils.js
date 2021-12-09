const Xuwu = require('../utils/xuwu')

class Request {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  suffixes = Xuwu.getTsOrJs()
  version = Xuwu.getVueVersion()
  request()  {
    this.api.render({
      [`/src/utils/request.${this.suffixes}`]: `../template/request/${Xuwu.getBuildToolName() + '-' +Xuwu.getLanguage()}/request.${this.suffixes}`,
      [`/src/api/index.${this.suffixes}`]: `../template/request/${Xuwu.getBuildToolName() + '-' +Xuwu.getLanguage()}/index.${this.suffixes}`
    })
  }
  rem() {
    this.api.render({
      [`/src/utils/rem.${this.suffixes}`]: `../template/utils/rem.${this.suffixes}`
    })
  }
  element() {
    this.api.render({
      [`/src/plugins/element.${this.suffixes}`]: `../template/plugins/${this.version}/element.${this.suffixes}`
    })
  }
  
}

module.exports = Request