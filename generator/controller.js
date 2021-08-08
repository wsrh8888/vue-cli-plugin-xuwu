/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-08-08 15:17:16
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
  pluginCrossEnv = () => {
    this.filePackage.packageCrossEnv()
    this.platforms.getPlatforms().platformAddUtilsConfig()
  }
  uiElement = () => {
    this.filePackage.packageElementUi()
    this.platforms.getPlatforms().platformAddPluginsElement()
    this.fileBabelConfig.babelConfigAddElement()
    this.fileMain.mainAddElement()
  }
  uiVant() {
    this.filePackage.packageVantUi()
    this.platforms.getPlatforms().platformAddPluginsVant()
    this.fileMain.mainAddVant()
  }
  uiVantVue3() {
    this.filePackage.packageVantVue3()
    this.platforms.getPlatforms().platformAddPluginsVantVue3()
    this.fileMain.mainAddVantVue3()
  }
  uiElementVue3 = () => {
    this.platforms.getPlatforms().platformAddPluginsElementVue3()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainInit()
    this.fileMain.mainAddElementVue3()
  }
  pluginRequest = () => {
    this.pluginCrossEnv()
    this.platforms.getPlatforms().platformAddUtilsRequest()
  }
  pluginSassPlugin = () => {
    this.filePackage.packageSass()
  }
  lessPlugin = () => {
    this.filePackage.packageLess()
  }
  pluginVuedraggable = () => {
    this.filePackage.packageVuedraggable()
  }
  pluginRemoveConsole = () => {
    this.filePackage.packageRemoveConsole()
    this.fileBabelConfig.babelConfigReoveConsole()
  }
  pluginLintStaged = () => {
    this.platforms.platformsLintStaged()
    this.filePackage.packageCommitPre()
  }

  pluginAddVconsole = () => {
    this.pluginCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsole()
  }
  pluginFlexibleVue3 = () => {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platforms.getPlatforms().platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  pluginFlexible = () => {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platforms.getPlatforms().platformAddUtilsRem()
    this.fileMain.mainAddRem()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  pluginAddVconsoleVue3 = () => {
    this.pluginCrossEnv()
    this.fileMain.mainInit()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
}

module.exports = Controller
