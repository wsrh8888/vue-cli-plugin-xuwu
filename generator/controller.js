/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-08-07 21:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/console.js
 */
const { Utils } = require('./utils/tools')
const FileMainVue = require('./controller/main.vue')
const FileVueConfig = require('./controller/vue.config')
const FileMain = require('./controller/main')
const FilePackage = require('./controller/package')
const FileBabelConfig = require('./controller/babel.config')

class Controller {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  utils = new Utils()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  platformAddUtilsConfig = () => {}
  platformAddUtilsRequest = () => {}
  platformAddPluginsVant = () => {}
  platformAddPluginsElementVue3 = () => {}
  platformAddPluginsElement = () => {}
  platformAddUtilsRem = () => {}
  platformAddPluginsVantVue3 = () => {}

  static pluginCrossEnv() {
    this.filePackage.packageCrossEnv()
    this.platformAddUtilsConfig()
  }
  static uiElement() {
    this.filePackage.packageElementUi()
    this.platformAddPluginsElement()
    this.fileBabelConfig.babelConfigAddElement()
    this.fileMain.mainAddElement()
  }
  static uiVant() {
    this.filePackage.packageVantUi()
    this.platformAddPluginsVant()
    this.fileMain.mainAddVant()
  }
  static uiVantVue3() {
    this.filePackage.packageVantVue3()
    this.platformAddPluginsVantVue3()
    this.fileMain.mainAddVantVue3()
  }
  static uiElementVue3() {
    this.platformAddPluginsElementVue3()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainInit()
    this.fileMain.mainAddElementVue3()
  }
  static pluginRequest() {
    this.pluginCrossEnv()
    this.platformAddUtilsRequest()
  }
  static pluginSassPlugin() {
    this.filePackage.packageSass()
  }
  static lessPlugin() {
    this.filePackage.packageLess()
  }
  static pluginVuedraggable() {
    this.filePackage.packageVuedraggable()
  }
  static pluginRemoveConsole() {
    console.log('33333', this.filePackage)
    this.filePackage.packageRemoveConsole()
    this.fileBabelConfig.babelConfigReoveConsole()
  }
  static pluginLintStaged() {
    // api.render({
    //   '/.eslintrc.js': './module/_eslintrc.js',
    //   '/.eslintignore': './module/_eslintignore',
    //   '/.prettierrc': './module/_prettierrc'
    // })
    // this.filePackage.packageCommitPre()
  }

  static pluginAddVconsole() {
    this.pluginCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsole()
  }
  static pluginFlexibleVue3() {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  static pluginFlexible() {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platformAddUtilsRem()
    this.fileMain.mainAddRem()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  static pluginAddVconsoleVue3() {
    this.pluginCrossEnv()
    this.fileMain.mainInit()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
}

module.exports = Controller
