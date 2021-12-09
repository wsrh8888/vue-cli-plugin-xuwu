const Xuwu = require('../../utils/xuwu')
const UniappJs = require('./uniappJs')
const UniappTs = require('./uniappTs')
const WebJs = require('./webJs')
const WebTs = require('./webTs')

/**
 * @description: 处理跟平台有关系的相关代码逻辑
 * @param {*}
 * @return {*}
 */
class Platforms {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  tsOrJs = Xuwu.getTsOrJs()
  vueVersion = Xuwu.getVueVersion()
  language = Xuwu.getLanguage()
  uniappJs = new UniappJs()
  uniappTs = new UniappTs()
  webJs = new WebJs()
  webTs = new WebTs()

  /**
   * @description: 公共全局的配置文件，包括eslintrc.js，.eslintignore，.prettierrc
   * @param {*}
   * @return {void}
   */
  platformsLintStaged() {
    this.api.render({
      '/.eslintrc.js': '../../module/_eslintrc.js',
      '/.eslintignore': '../../module/_eslintignore',
      '/.prettierrc': '../../module/_prettierrc'
    })
  }
  /**
   * @description: 添加ajax请求相关的依赖和默认配置
   * @param {*}
   * @return {void}
   */
  platformAddUtilsRequest() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddUtilsRequest()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddUtilsRequest()
    } else if (this.language === 'uniapp' && this.tsOrJs === 'js') {
      return this.uniappJs.platformAddUtilsRequest()
    } else if (this.language === 'uniapp' && this.tsOrJs === 'ts') {
      return this.uniappTs.platformAddUtilsRequest()
    }
  }
  /**
   * @description: 引入全局url相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsConfig() {
    if (Xuwu.getBuildToolName() === 'vite') {
      this.api.render({
        '/.env.pre': '../../module/ENV/.env.pre',
        '/.env.prod': '../../module/ENV/.env.prod',
        '/.env.test': '../../module/ENV/.env.test'
      })
      return
    }
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddUtilsConfig()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddUtilsConfig()
    } else if (this.language === 'uniapp' && this.tsOrJs === 'js') {
      return this.uniappJs.platformAddUtilsConfig()
    } else if (this.language === 'uniapp' && this.tsOrJs === 'ts') {
      return this.uniappTs.platformAddUtilsConfig()
    }
  }
  /**
   * @description: 引入AntDesign按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesignVue3() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsAntDesignVue3()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsAntDesignVue3()
    }
  }
  /**
   * @description: 引入AntDesign按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsAntDesign() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsAntDesign()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsAntDesign()
    }
  }
  /**
   * @description: 引入vant按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVant() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsVant()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsVant()
    }
  }
  /**
   * @description: 引入vant3按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsVantVue3() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsVantVue3()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsVantVue3()
    }
  }
  /**
   * @description: 引入Element按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElement() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsElement()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsElement()
    }
  }
  /**
   * @description: 引入移动端适配相关文件
   * @param {*}
   * @return {void}
   */
  platformAddUtilsRem() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddUtilsRem()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddUtilsRem()
    }
  }
  /**
   * @description: 引入elementPlus按需引入相关文件
   * @param {*}
   * @return {void}
   */
  platformAddPluginsElementVue3() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs.platformAddPluginsElementVue3()
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webTs.platformAddPluginsElementVue3()
    }
  }
}

module.exports = Platforms
