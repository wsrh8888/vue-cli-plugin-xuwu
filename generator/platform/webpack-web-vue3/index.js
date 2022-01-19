const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/vite.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class WebpackWebVue3 extends Common {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  fileUtils = new FileUtils()
  fileViteConfig = new FileViteConfig()
  fileRootConfig = new FileRootConfig()

  // 默认选择的模版
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
  templateAddVconsole = () => {
    this.templateCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
  templateRequest = () => {
    this.templateCrossEnv()
    this.fileUtils.request()
    this.filePackage.packageAddAxios()
  }
  templateES5 = () => {
    this.fileBabelConfig.babelConfigEs6ToEs5()
    this.filePackage.packageBabelEs6ToEs5()
  }
  templateFlexible = () => {
    this.templateCrossEnv()
    this.filePackage.packageFlexible()
    this.fileUtils.rem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  templateLintStaged = () => {
    this.filePackage.packageCommitPre()
    this.fileRootConfig.eslintConfigFile()
  }
  templateRemoveConsole = () => {
    this.filePackage.packageRemoveConsole()
    this.fileBabelConfig.babelConfigRemoveConsole()
  }
  templateCrossEnv = () => {
    this.fileVueConfig.fileInit()
    this.filePackage.packageCrossEnv()
    this.fileUtils.utilConfig()
  }
  uiElement = () => {
    this.fileUtils.element()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainAddElementVue3()
  }
  uiVant = () => {
    this.filePackage.packageVantVue3()
    this.fileUtils.vant()
    this.fileBabelConfig.babelConfigAddVant()
    this.fileMain.mainAddVantVue3()
  }
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue3()
    this.fileUtils.antDesign()
    this.fileBabelConfig.babelConfigAddAntDesign()
    this.fileMain.mainAddAntDesignVue3()
  }
}
module.exports = WebpackWebVue3
