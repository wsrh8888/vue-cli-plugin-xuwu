/*
 * @Author: your name
 * @Date: 2021-08-06 11:26:06
 * @LastEditTime: 2021-08-07 20:03:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/utils/tools.js
 */

class BaseInfo {
  api = undefined
  options = undefined
  static single

  constructor(api, options) {
    this.api = api
    this.options = options
  }
  /**
   * @description: 使用单例模式初始化基类的api，和option属性。全局使用
   * @param {*} api
   * @param {*} options
   * @return {*}
   */
  static init(api, options) {
    if (this.single === undefined && api && options) {
      this.single = new BaseInfo(api, options)
    }
    return this.single
  }
  /**
   * @description: 获取全局属性，api
   * @param {*}
   * @return {*}
   */
  static getApi() {
    if (this.single === undefined) {
      throw new Error('初始化实例失败')
    }
    return this.single.api
  }
  /**
   * @description: 获取全局属性，option
   * @param {*}
   * @return {*}
   */
  static getOption() {
    if (this.single === undefined) {
      throw new Error('初始化实例失败')
    }
    return this.single.options
  }
  getVueVersion() {
    let result = 'vue2'
    try {
      let packageData = JSON.parse(this.api.generator.files['package.json'])
      let version =
        packageData.dependencies.vue || packageData.devDependencies.vue
      result = 'vue' + version[version.indexOf('.') - 1].toString()
    } catch (error) {
      result = 'vue2'
    }
    return result
  }
}

class Utils {
  api = BaseInfo.getApi()
  options = BaseInfo.getOption()
  /**
   * @description: 当前项目的vue版本
   * @param {*}
   * @return {*}
   */
  vueVersion() {
    let result = 'vue2'
    try {
      let packageData = JSON.parse(this.api.generator.files['package.json'])
      let version =
        packageData.dependencies.vue || packageData.devDependencies.vue
      result = 'vue' + version[version.indexOf('.') - 1].toString()
    } catch (error) {
      result = 'vue2'
    }
    return result
  }

  /**
   * @description: 当前项目是web项目还是uniapp项目
   * @param {*}
   * @return {*}
   */
  language() {
    return this.options.promptsLanguage
  }

  /**
   * @description: 判断项目的使用场景是pc端还是移动端
   * @param {*}
   * @return {*}
   */
  scene() {
    return this.options.promptsScene ? this.options.promptsScene : 'pc'
  }

  /**
   * @description: 判断项目是js项目还是ts项目
   * @param {*}
   * @return {*}
   */
  tsOrJs() {
    return this.api.entryFile.endsWith('.ts') ? 'ts' : 'js'
  }
}

module.exports = {
  BaseInfo,
  Utils
}
