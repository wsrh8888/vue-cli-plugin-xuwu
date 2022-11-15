const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/viteConfig/vite2.config')
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
    this.templateSvgLoader()
  }
  defaultMobile = () => {
    this.templateLintStaged()
    this.templateCrossEnv()
    this.templateRemoveConsole()
    this.templateAddVconsole()
    this.templateFlexible()
    this.templateRequest()
    this.uiVant()
    this.templateSvgLoader()
  }
  /*******
   * @description: 打包后体积分析
   */
  templateVisualizer = () => {
    this.filePackage.packageVisualizer()
    this.fileViteConfig.viteConfigVisualizer()
  }
  templatePinia() {
    // 引入package包
    this.filePackage.packagePinia()
    // 在main.js引入
    this.fileMain.mainAddPinia()
    // 引入store静态文件
    this.fileUtils.pinia()
  }
  /*******
   * @description: consoleLog控制台
   */
  templateAddVconsole = () => {
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
  /*******
   * @description: ajax请求模板
   */
  templateRequest = () => {
    this.fileUtils.request()
    this.filePackage.packageAddAxios()
  }
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
    this.fileViteConfig.viteConfigRemoveConsole()
  }
  /*******
   * @description: svg 解析
   * @return {*}
   */
  templateSvgLoader = () => {
    this.filePackage.packageSvgLoader()
    this.fileViteConfig.viteConfigSvgLoader()
  }
  /*******
   * @description: 扩展环境变量
   */
  templateCrossEnv = () => {
    this.fileViteConfig.addEnvConfig()
    this.filePackage.packageCrossEnvVite()
    this.fileRootConfig.envConfigFile()
  }
  /*******
   * @description: Element Ui
   */
  uiElement = () => {
    this.filePackage.packageElementPlusUi()
    // 增加按需引入的依赖包
    this.filePackage.packageUnpluginElementPlus()
    // 按需引入的配置代码
    this.fileViteConfig.viteConfigAddElement()
  }
  uiVant = () => {
    this.filePackage.packageVantVue3()
    this.filePackage.packageVue3Vite()
    this.fileViteConfig.viteConfigAddVant()
  }
  uiAntDesign = () => {
    this.templateLess()
    this.fileViteConfig.viteConfigLess()
    this.filePackage.packageVue3Vite()
    this.filePackage.packageAntDesignVue3()
    this.fileUtils.antDesign()
    this.fileViteConfig.viteConfigAddAntDesign()
  }
  templateFileUtils() {
    this.filePackage.packageFileUtils()
    this.fileUtils.fileUtilsPlus()
  }
}
module.exports = ViteWebVue3
