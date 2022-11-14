const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class WebpackWebVue2 extends Common {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  fileUtils = new FileUtils()
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
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsole()
  }
  templateRequest = () => {
    this.filePackage.packageAddAxios()
    this.fileUtils.request()
  }
  templateES5 = () => {
    this.fileBabelConfig.babelConfigEs6ToEs5()
    this.filePackage.packageBabelEs6ToEs5()
  }
  templateFlexible = () => {
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
    this.fileVueConfig.fileInit()
    this.filePackage.packageCrossEnv()
    this.fileUtils.utilConfig()
  }
  uiElement = () => {
    this.filePackage.packageElementUi()
    this.fileBabelConfig.babelConfigAddElement()
  }
  uiVant = () => {
    this.filePackage.packageVantUi()
    this.fileBabelConfig.babelConfigAddVant()
  }
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue2()
    this.fileBabelConfig.babelConfigAddAntDesign()
  }
  templateFileUtils() {
    this.filePackage.packageFileUtils()
    this.fileUtils.fileUtilsPlus()
  }
}
module.exports = WebpackWebVue2
