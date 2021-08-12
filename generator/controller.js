/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-08-12 14:13:10
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

/**
 * @description: 组件的拼装中心，将一个大的功能模块拆解成不同的小模块
 * @param {*}
 * @return {void}
 */
class Controller {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  platforms = new Platforms()
  /**
   * @description: 扩展环境变量功能
   * @param {*}
   * @return {void}
   */
  pluginCrossEnv = () => {
    this.filePackage.packageCrossEnv()
    this.platforms.platformAddUtilsConfig()
  }
  /**
   * @description: ElementUi，vue2用法
   * @param {*}
   * @return {void}
   */
  uiElement = () => {
    this.filePackage.packageElementUi()
    this.platforms.platformAddPluginsElement()
    this.fileBabelConfig.babelConfigAddElement()
    this.fileMain.mainAddElement()
  }
  /**
   * @description: AntDesignUi，vue2用法
   * @param {*}
   * @return {void}
   */
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue2()
    this.platforms.platformAddPluginsAntDesign()
    this.fileMain.mainAddAntDesign()
  }
  /**
   * @description: VantUi，vue2用法
   * @param {*}
   * @return {void}
   */
  uiVant = () => {
    this.filePackage.packageVantUi()
    this.platforms.platformAddPluginsVant()
    this.fileMain.mainAddVant()
  }
  /**
   * @description: VantUi，vue3用法
   * @param {*}
   * @return {void}
   */
  uiVantVue3 = () => {
    this.filePackage.packageVantVue3()
    this.platforms.platformAddPluginsVantVue3()
    this.fileMain.mainAddVantVue3()
  }
  /**
   * @description: ElementUi，vue3用法
   * @param {*}
   * @return {void}
   */
  uiElementVue3 = () => {
    this.platforms.platformAddPluginsElementVue3()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainInit()
    this.fileMain.mainAddElementVue3()
  }
  /**
   * @description: ajax请求功能
   * @param {*}
   * @return {void}
   */
  pluginRequest = () => {
    this.pluginCrossEnv()
    this.platforms.platformAddUtilsRequest()
  }
  /**
   * @description: sass识别功能
   * @param {*}
   * @return {void}
   */
  pluginSassPlugin = () => {
    this.filePackage.packageSass()
  }
  /**
   * @description: less识别功能
   * @param {*}
   * @return {void}
   */
  lessPlugin = () => {
    this.filePackage.packageLess()
  }
  /**
   * @description: 拖拽插件功能
   * @param {*}
   * @return {void}
   */
  pluginVuedraggable = () => {
    this.filePackage.packageVuedraggable()
  }
  /**
   * @description: 生产环境去掉console功能
   * @param {*}
   * @return {void}
   */
  pluginRemoveConsole = () => {
    this.filePackage.packageRemoveConsole()
    this.fileBabelConfig.babelConfigReoveConsole()
  }
  /**
   * @description: commit代码时统一风格功能
   * @param {*}
   * @return {void}
   */
  pluginLintStaged = () => {
    this.platforms.platformsLintStaged()
    this.filePackage.packageCommitPre()
  }
  /**
   * @description: consoleLog控制台功能，Vue2写法
   * @param {*}
   * @return {void}
   */
  pluginAddVconsole = () => {
    this.pluginCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsole()
  }
  /**
   * @description: 适配插件功能，vue3写法
   * @param {*}
   * @return {void}
   */
  pluginFlexibleVue3 = () => {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platforms.platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  /**
   * @description: 适配插件功能，vue2写法
   * @param {*}
   * @return {void}
   */
  pluginFlexible = () => {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platforms.platformAddUtilsRem()
    this.fileMain.mainAddRem()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  /**
   * @description: consoleLog控制台功能，Vue3写法
   * @param {*}
   * @return {void}
   */
  pluginAddVconsoleVue3 = () => {
    this.pluginCrossEnv()
    this.fileMain.mainInit()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
}

module.exports = Controller
