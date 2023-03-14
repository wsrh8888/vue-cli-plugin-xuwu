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

  // 矫正主文件entryFile的正确值
  _
  static getLanguage() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
    return fsIsExistPackage(file, '@dcloudio/uni-automator') ? 'uniapp' : 'web'
  }
  /*******
   * @description: 判断项目中使用的打包工具
   */
  static getBuildToolName() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
    if (fsIsExistPackage(file, 'vite')) {
      try {
        let packageData = JSON.parse(file)
        let version =
          packageData.dependencies.vite || packageData.devDependencies.vite
        return 'vite' + version[version.indexOf('.') - 1].toString()
      } catch (error) {
        return 'vue2'
      }
    } else {
      return 'webpack'
    }
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
  /*******
   * @description: 矫正主文件entryFile的正确值
   */
  static _rectifyEntryFile() {
    if (fs.existsSync(path.join(process.cwd(), 'src/main.js'))) {
      this.single.api._entryFile = 'main.js'
    } else if (fs.existsSync(path.join(process.cwd(), 'src/main.ts'))) {
      this.single.api._entryFile = 'main.ts'
    } else if (fs.existsSync(path.join(process.cwd(), 'src/main.jsx'))) {
      this.single.api._entryFile = 'main.jsx'
    } else if (fs.existsSync(path.join(process.cwd(), 'src/main.tsx'))) {
      this.single.api._entryFile = 'main.tsx'
    }
  }
  /**
   * @description: 使用单例模式初始化基类的api，和option属性。全局使用
   */
  static init(api, options) {
    if (this.single === undefined && api && options) {
      this.single = new Xuwu(api, options)
      this._rectifyEntryFile()
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
   * @return {string} |vue2 | vue3| react
   */
  static getVueVersion() {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
    let result = 'vue2'
    try {
      let packageData = JSON.parse(file)
      // 判断是vue还是react
      if (fsIsExistPackage(file, 'react')) {
        result = 'react'
      } else {
        let version =
          packageData.dependencies.vue || packageData.devDependencies.vue
        result = 'vue' + version[version.indexOf('.') - 1].toString()
      }
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
  static MainFile() {
    return this.single.api._entryFile
  }
  /**
   * @description: 获取全局属性，项目使用的语言类型
   * @return {string} |js|ts|
   */
  static getTsOrJs() {
    // 获取文件后缀
    const fileName = this.single.api._entryFile
    const index = fileName.lastIndexOf('.')
    const ext = fileName.substr(index + 1)
    return ext.startsWith('ts') ? 'ts' : 'js'
  }
}

module.exports = Xuwu
