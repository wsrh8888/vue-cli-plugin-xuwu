const fs = require('fs')
const { fsIsExistPackage } = require('./fs')
const path = require('path')
/**
 * @description: Xuwu项目全局属性
 * @param {*}
 * @return {void}
 */
class Xuwu {
  api = undefined
  options = undefined
  static single

  constructor(api, options) {
    this.api = api
    this.options = options
  }
  static getLanguage() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
     return fsIsExistPackage(file, '@dcloudio/uni-automator')
      ? 'uniapp'
      : 'web'
  }
  /*******
   * @description: 判断项目中使用的打包工具
   */
  static getBuildToolName() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
   return fsIsExistPackage(file, 'vite') ? 'vite' : 'webpack'
  }
  /**
   * @description: 判断package中是否存在某个依赖包
   * @param {*} value package包的名字
   */
  static isExistPackage(value) {
    return (
      this.single.api.generator.files['package.json'].search(
        '"' + value + '"'
      ) !== -1
    )
  }
  /**
   * @description: 使用单例模式初始化基类的api，和option属性。全局使用
   */
  static init(api, options) {
    if (this.single === undefined && api && options) {
      this.single = new Xuwu(api, options)
    }
    return this.single
  }
  /**
   * @description: 获取全局属性，api
   */
  static getApi() {
    if (this.single === undefined) {
      throw new Error('初始化实例失败')
    }
    return this.single.api
  }
  /**
   * @description: 获取全局属性，option
   */
  static getOption() {
    if (this.single === undefined) {
      throw new Error('初始化实例失败')
    }
    return this.single.options
  }
  /**
   * @description: 获取全局属性，vue的版本
   * @return {string} |vue2 | vue3|
   */
  static getVueVersion() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
    let result = 'vue2'
    try {
      let packageData = JSON.parse(file)
      let version =
        packageData.dependencies.vue || packageData.devDependencies.vue
      result = 'vue' + version[version.indexOf('.') - 1].toString()
    } catch (error) {
      result = 'vue2'
    }
    return result
  }
  /**
   * @description: 获取全局属性，使用场景
   * @return {string} |pc|mobile|
   */
  static getScene() {
    return this.single.options.promptsScene
      ? this.single.options.promptsScene
      : 'pc'
  }

  /**
   * @description: 获取全局属性，项目使用的语言类型
   * @return {string} |js|ts|
   */
  static getTsOrJs() {
    return this.single.api.entryFile.endsWith('.ts') ? 'ts' : 'js'
  }
}

module.exports = Xuwu
