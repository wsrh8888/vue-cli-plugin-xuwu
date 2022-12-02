const FileMainVue = require('../../compilation/main.vue')
const FileVueConfig = require('../../compilation/vue.config')
const FileMain = require('../../compilation/main')
const FilePackage = require('../../compilation/package')
const FileBabelConfig = require('../../compilation/babel.config')
const FileUtils = require('../../compilation/utils')
const FileRootConfig = require('../../compilation/root.config')
const FileViteConfig = require('../../compilation/viteConfig/vite3.config')

const Common = require('../main')
class WebpackUniappVue3 extends Common {
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
  }
  defaultMobile = () => {
    this.defaultPc()
  }
  templateRequest = () => {
    this.fileUtils.request()
  }
  templateLintStaged = () => {
    this.filePackage.packageCommitPreVue3()
    this.fileRootConfig.eslintConfigFileVue3()
  }
  templateCrossEnv = () => {
    this.filePackage.packageCrossEnvUniappVite()
    this.fileViteConfig.addEnvConfigUniapp()
    this.fileRootConfig.envConfigFile()
  }
}
module.exports = WebpackUniappVue3
