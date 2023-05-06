const Xuwu = require('../utils/xuwu')

class RootRequest {
  utilRootConfig() {
    this.api.render({
      [`/utils/config.${this.suffixes}`]: `../template/utils/config.${this.suffixes}`
    })
  }
  utilRootConfig() {
    this.api.render({
      [`/utils/config.${this.suffixes}`]: `../template/utils/config.${this.suffixes}`
    })
  }
}

class Request extends RootRequest {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  suffixes = Xuwu.getTsOrJs()
  version = Xuwu.getVueVersion()
  language = Xuwu.getLanguage()
  /*******
   * @description: ajax请求
   */
  request() {
    this.api.render({
      [`/src/utils/request.${this.suffixes}`]: `../template/request/${this.language}.${this.suffixes}`,
      [`/src/api/index.${this.suffixes}`]: `../template/request/index.${this.suffixes}`
    })
  }
  utilConfig() {
    this.api.render({
      [`/src/utils/config.${this.suffixes}`]: `../template/utils/config.${this.suffixes}`
    })
  }
  pinia() {
    this.api.render({
      [`/src/store/index.${this.suffixes}`]: `../template/store/index.${this.suffixes}`
    })
  }
  /*******
   * @description: 在utils增加mitt文件
   */
  mitt() {
    this.api.render({
      [`/src/utils/mitt.${this.suffixes}`]: `../template/utils/mitt.${this.suffixes}`
    })
  }
  rem() {
    this.api.render({
      [`/src/utils/rem.${this.suffixes}`]: `../template/utils/rem.${this.suffixes}`
    })
  }
  fileUtilsPlus() {
    this.api.render({
      [`/src/utils/upload.${this.suffixes}`]: `../template/utils/upload.${this.suffixes}`
    })
  }
}

module.exports = Request
