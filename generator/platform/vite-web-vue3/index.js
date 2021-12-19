const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/vite.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class ViteWebVue3 extends Common {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  fileUtils = new FileUtils()
  fileViteConfig = new FileViteConfig()
  fileRootConfig = new FileRootConfig()

  defaultPc = () => {
    this.templateLintStaged()
    this.templateRemoveConsole()
    this.templateCrossEnv()
    this.templateRequest()
    this.uiElement()
  }
  defaultMobile = () => {
    this.templateLintStaged()
    this.templateCrossEnv()
    this.templateRemoveConsole()
    this.templateAddVconsole()
    this.templateFlexible()
    this.templateRequest()
    this.uiVant()
  }
  /*******
   * @description: consoleLog控制台
   */
  templateAddVconsole = () => {
    this.templateCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
  /*******
   * @description: ajax请求模板
   */
  templateRequest = () => {
    this.templateCrossEnv()
    this.fileUtils.request()
    this.filePackage.packageAddAxios()
  }
  templateES5 = () => {}
  /*******
   * @description: 适配插件
   */
  templateFlexible = () => {
    this.fileRootConfig.postcssConfigFile()
    this.filePackage.packageFlexibleVite()
    this.fileUtils.rem()
    this.fileMain.mainAddRemVue3()
    this.fileMainVue.mainVueAddMedia()
  }
  /*******
   * @description: commit代码时统一风格
   */
  templateLintStaged = () => {
    this.filePackage.packageCommitPreVue3()
    this.fileRootConfig.eslintConfigFileVue3()
  }
  /*******
   * @description: templateAddVconsole
   */
  templateRemoveConsole = () => {
    this.templateCrossEnv()
    this.fileViteConfig.viteConfigRemoveConsole()
  }
  /*******
   * @description: 扩展环境变量
   */
  templateCrossEnv = () => {
    this.filePackage.packageCrossEnvVite()
    this.fileRootConfig.envConfigFile()
  }
  /*******
   * @description: Element Ui
   */
  uiElement = () => {
    this.templateSass()
    this.filePackage.packageVue3Vite()
    this.fileUtils.element()
    this.filePackage.packageElementPlusUi()
    this.fileMain.mainAddElementVue3()
    this.fileViteConfig.viteConfigAddElement()
  }
  uiVant = () => {
    this.filePackage.packageVantVue3()
    this.filePackage.packageVue3Vite()
    this.fileUtils.vant()
    this.fileViteConfig.viteConfigAddVant()
    this.fileMain.mainAddVantVue3()
  }
  uiAntDesign = () => {
    this.templateLess()
    this.fileViteConfig.viteConfigLess()
    this.filePackage.packageVue3Vite()
    this.filePackage.packageAntDesignVue3()
    this.fileUtils.antDesign()
    this.fileViteConfig.viteConfigAddAntDesign()
    this.fileMain.mainAddAntDesignVue3()
  }
}
module.exports = ViteWebVue3
