const FileMainVue = require('./controller/main.vue')
const FileVueConfig = require('./controller/vue.config')
const FileMain = require('./controller/main')
const FilePackage = require('./controller/package')
const FileBabelConfig = require('./controller/babel.config')
const Platforms = require('./controller/platforms/index')
const FileViteConfig = require('./controller/vite.config')
const Extension = require('./controller/extension')
const Xuwu = require('./utils/xuwu')

/**
 * @description: 组件的拼装中心，将一个大的功能模块拆解成不同的小模块
 * @param {*}
 * @return {void}
 */
class Compiler {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  platforms = new Platforms()
  fileViteConfig = new FileViteConfig()
  extension = new Extension()
  /**
   * @description: 兼容低版本浏览器，将ES6转为ES5代码
   * @param {*}
   * @return {void}
   */
  pluginEs6ToEs5 = () => {
    if (Xuwu.buildToolName() === 'vite') {
      return
    }
    this.fileBabelConfig.babelConfigEs6ToEs5()
    this.filePackage.packageBabelEs6ToEs5()
  }
  /**
   * @description: 扩展环境变量功能
   * @param {*}
   * @return {void}
   */
  pluginCrossEnv = () => {
    // 判断是webpack还是vite
    if (Xuwu.buildToolName() === 'vite') {
      this.filePackage.packageCrossEnvVite()
    } else {
      this.filePackage.packageCrossEnv()
    }
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
   * @description: AntDesignUi，vue3用法
   * @param {*}
   * @return {void}
   */
  uiAntDesignVue3 = () => {
    this.filePackage.packageAntDesignVue3()
    this.platforms.platformAddPluginsAntDesignVue3()
    this.fileBabelConfig.babelConfigAddAntDesign()
    this.fileMain.mainAddAntDesignVue3()
  }
  /**
   * @description: AntDesignUi，vue2用法
   * @param {*}
   * @return {void}
   */
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue2()
    this.platforms.platformAddPluginsAntDesign()
    this.fileBabelConfig.babelConfigAddAntDesign()
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
    this.fileBabelConfig.babelConfigAddVant()
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
    this.fileBabelConfig.babelConfigAddVant()
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
    if (Xuwu.buildToolName() === 'vite') {
      this.pluginCrossEnv()
      this.fileViteConfig.viteConfigRemoveConsole()
    } else {
      this.filePackage.packageRemoveConsole()
      this.fileBabelConfig.babelConfigRemoveConsole()
    }
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
  /*******
   * @description: 适配插件 vite的写法
   * @param {*}
   * @return {*}
   */
  pluginFlexileVite = () => {
    this.extension.postcssConfigFile()
    this.filePackage.packageFlexibleVite()
    this.platforms.platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileMainVue.mainVueAddMedia()
  }
  /**
   * @description: 适配插件功能，vue3写法
   * @param {*}
   * @return {void}
   */
  pluginFlexibleVue3 = () => {
    if (Xuwu.buildToolName() === 'vite') {
      this.pluginFlexileVite()
      return
    }
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
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
}

module.exports = Compiler
