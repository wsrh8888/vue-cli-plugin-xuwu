const Xuwu = require('../utils/xuwu')

class RootRequest {
  utilRootConfig() {
    this.api.render({
      [`/utils/config.${this.suffixes}`]: `../template/utils/config.${this.suffixes}`
    })
  }
  utilsRootRequest() {
    this.api.render({
      [`/utils/request.${this.suffixes}`]: `../template/request/${
        Xuwu.getBuildToolName() + '-' + 'web'
      }/request.${this.suffixes}`,
      [`/api/index.${this.suffixes}`]: `../template/request/${
        Xuwu.getBuildToolName() + '-' + 'web'
      }/index.${this.suffixes}`
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
  /*******
   * @description: ajax请求
   */
  request() {
    this.api.render({
      [`/src/utils/request.${this.suffixes}`]: `../template/request/${
        Xuwu.getBuildToolName() + '-' + Xuwu.getLanguage()
      }/request.${this.suffixes}`,
      [`/src/api/index.${this.suffixes}`]: `../template/request/${
        Xuwu.getBuildToolName() + '-' + Xuwu.getLanguage()
      }/index.${this.suffixes}`
    })
  }
  uniappRequest() {
    this.api.render({
      [`/src/utils/request.${this.suffixes}`]: `../template/request/uniapp/request.${this.suffixes}`,
      [`/src/api/index.${this.suffixes}`]: `../template/request/${
        Xuwu.getBuildToolName() + '-' + Xuwu.getLanguage()
      }/index.${this.suffixes}`
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
  vant() {
    this.api.render({
      [`/src/plugins/vant.${this.suffixes}`]: `../template/plugins/${this.version}/vant.${this.suffixes}`
    })
  }
  fileUtilsPlus() {
    this.api.render({
      [`/src/utils/upload.${this.suffixes}`]: `../template/utils/upload.${this.suffixes}`
    })
  }
  antDesign() {
    this.api.render({
      [`/src/plugins/antDesign.${this.suffixes}`]: `../template/plugins/${this.version}/antDesign.${this.suffixes}`
    })
  }
}

module.exports = Request
