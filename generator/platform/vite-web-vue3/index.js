const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/vite.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class ViteWebVue3 extends Common{
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  fileUtils = new FileUtils()
  fileViteConfig = new FileViteConfig()
  fileRootConfig = new FileRootConfig()

  // 默认选择的模版
  defaultTemplate = () => {
    console.log('default')
  }
  /******* 
   * @description: consoleLog控制台
   */  
  templateAddVconsole= () => {
    this.templateCrossEnv()
    this.fileViteConfig.viteConfigRemoveConsole()
  }
  /******* 
   * @description: ajax请求模板
   */  
  templateRequest= () => {
    this.templateCrossEnv()
    this.fileUtils.request()
  }
  templateES5= () => {

  }
  /******* 
   * @description: 适配插件
   */  
  templateFlexible= () => {
    this.fileRootConfig.postcssConfigFile()
    this.filePackage.packageFlexibleVite()
    this.fileUtils.rem()
    this.fileMain.mainAddRemVue3()
    this.fileMainVue.mainVueAddMedia()
  }
  /******* 
   * @description: commit代码时统一风格
   */  
  templateLintStaged= () => {

  }
  /******* 
   * @description: templateAddVconsole
   */  
  templateRemoveConsole= () => {
    this.templateCrossEnv()
    this.fileViteConfig.viteConfigRemoveConsole()
  }
  /******* 
   * @description: 扩展环境变量
   */  
  templateCrossEnv= () => {
    this.filePackage.packageCrossEnvVite()
    this.fileRootConfig.envConfigFile()
  }
  /******* 
   * @description: Element Ui
   */  
  UiElement = () => {
    this.commonSass()
    this.filePackage.packageVue3Vite()
    this.fileUtils.element()
    this.filePackage.packageElementPlusUi()
    this.fileMain.mainAddElementVue3()
    this.fileViteConfig.viteConfigAddElement()
  }
  UiVant = () => {
    
  }
  UiAntDesign = () => {
    
  }
}
module.exports = ViteWebVue3
