const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileNuxtConfig = require('../../compilation/nuxt.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class WebpackUniappVue2 extends Common {
  fileMainVue = new FileMainVue()
  fileVueConfig = new FileVueConfig()
  fileMain = new FileMain()
  filePackage = new FilePackage()
  fileBabelConfig = new FileBabelConfig()
  fileUtils = new FileUtils()
  filNuxtConfig = new FileNuxtConfig()
  fileRootConfig = new FileRootConfig()
  // 默认选择的模版
  defaultPc = () => {
    this.templateCrossEnv()
    // this.templateLintStaged()
    this.templateRequest()
    this.templateRemoveConsole()
    this.templateAddVconsole()
  }
  defaultMobile = () => {
    // this.defaultPc()
  }
  templateAddVconsole = () => {
    this.templateCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.filNuxtConfig.nuetConfigAddVconsole()
  }
  templateRequest = () => {
    this.templateCrossEnv()
    this.fileUtils.utilsRootRequest()
    this.filePackage.packageAddAxios()
  }
  templateLintStaged = () => {
    // this.filePackage.packageCommitPre()
    // this.fileRootConfig.eslintConfigFile()
  }
  templateCrossEnv = () => {
    this.filNuxtConfig.nuxtConfigInitEnv()
    this.filePackage.packageNuetWebpack()
    this.fileUtils.utilRootConfig()
  }
  /*******
   * @description: templateAddVconsole
   */
  templateRemoveConsole = () => {
    this.templateCrossEnv()
    this.filNuxtConfig.nuxtConfigRemoveConsole()
  }
}
module.exports = WebpackUniappVue2
