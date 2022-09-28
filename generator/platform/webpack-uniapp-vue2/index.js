const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileViteConfig = require('../../compilation/vite.config')
const FileRootConfig = require('../../compilation/root.config')
const Common = require('../main')
class WebpackUniappVue2 extends Common {
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
    this.templateCrossEnv()
    this.templateLintStaged()
    this.templateRequest()
    this.templateLess()
  }
  defaultMobile = () => {
    this.defaultPc()
  }
  templateRequest = () => {
    this.templateCrossEnv()
    this.fileUtils.uniappRequest()
    this.filePackage.packageAddAxios()
  }
  templateLintStaged = () => {
    this.filePackage.packageCommitPre()
    this.fileRootConfig.eslintConfigFile()
  }
  templateCrossEnv = () => {
    this.filePackage.packageUniappWebpack()
    this.fileUtils.utilConfig()
  }
}
module.exports = WebpackUniappVue2
