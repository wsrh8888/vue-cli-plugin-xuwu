const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/vite.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class WebpackWebVue2 extends Common {
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
  templateAddVconsole = () => {
    this.templateCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsole()
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
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.fileUtils.rem()
    this.fileMain.mainAddRem()
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
    this.filePackage.packageCrossEnv()
    this.fileUtils.utilConfig()
  }
  uiElement = () => {
    this.filePackage.packageElementUi()
    this.fileUtils.element()
    this.fileBabelConfig.babelConfigAddElement()
    this.fileMain.mainAddElement()
  }
  uiVant = () => {
    this.filePackage.packageVantUi()
    this.fileUtils.vant()
    this.fileBabelConfig.babelConfigAddVant()
    this.fileMain.mainAddVant()
  }
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue2()
    this.fileUtils.antDesign()
    this.fileBabelConfig.babelConfigAddAntDesign()
    this.fileMain.mainAddAntDesign()
  }
}
module.exports = WebpackWebVue2
