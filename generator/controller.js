/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-08-08 12:45:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/console.js
 */
const FileMainVue = require('./controller/main.vue')
const FileVueConfig = require('./controller/vue.config')
const FileMain = require('./controller/main')
const FilePackage = require('./controller/package')
const FileBabelConfig = require('./controller/babel.config')
const Platforms = require('./controller/platforms/index')
class Controller {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  platforms = new Platforms()
  pluginCrossEnv() {
    // this.filePackage.packageCrossEnv()
    // Platforms.platformAddUtilsConfig()
  }
  uiElement(_this) {
    _this.filePackage.packageElementUi()
    console.log(11111, _this.platforms.getPlatforms())
    _this.platforms.getPlatforms().platformAddPluginsElement()
    _this.fileBabelConfig.babelConfigAddElement()
    _this.fileMain.mainAddElement()
  }
  uiVant() {
    this.filePackage.packageVantUi()
    Platforms.platformAddPluginsVant()
    this.fileMain.mainAddVant()
  }
  uiVantVue3() {
    this.filePackage.packageVantVue3()
    Platforms.platformAddPluginsVantVue3()
    this.fileMain.mainAddVantVue3()
  }
  uiElementVue3() {
    Platforms.platformAddPluginsElementVue3()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainInit()
    this.fileMain.mainAddElementVue3()
  }
  pluginRequest(_this) {
    _this.pluginCrossEnv()
    // _this.platformAddUtilsRequest()
  }
  pluginSassPlugin() {
    this.filePackage.packageSass()
  }
  lessPlugin() {
    this.filePackage.packageLess()
  }
  pluginVuedraggable() {
    this.filePackage.packageVuedraggable()
  }
  pluginRemoveConsole(_this) {
    console.log(_this)
    _this.filePackage.packageRemoveConsole()
    _this.fileBabelConfig.babelConfigReoveConsole()
  }
  pluginLintStaged() {
    // api.render({
    //   '/.eslintrc.js': './module/_eslintrc.js',
    //   '/.eslintignore': './module/_eslintignore',
    //   '/.prettierrc': './module/_prettierrc'
    // })
    // this.filePackage.packageCommitPre()
  }

  pluginAddVconsole(_this) {
    _this.pluginCrossEnv()
    _this.filePackage.packageAddConsolePanel()
    _this.fileMain.mainAddVconsole()
  }
  pluginFlexibleVue3() {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    Platforms.platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  pluginFlexible() {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    Platforms.platformAddUtilsRem()
    this.fileMain.mainAddRem()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  pluginAddVconsoleVue3() {
    this.pluginCrossEnv()
    this.fileMain.mainInit()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
}

module.exports = Controller
