/*
 * @Author: your name
 * @Date: 2021-08-06 11:26:06
 * @LastEditTime: 2021-08-07 15:49:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/utils/tools.js
 */

export class Utils {
  _api: any
  _version: string = ''
  _options: any = {}

  constructor(api) {
    this._api = api
    // this._options = options
  }
  /**
   * @description: 当前项目的vue版本
   * @param {*}
   * @return {*}
   */
  vueVersion() {
    let result = 'vue2'
    try {
      let packageData = JSON.parse(this._api.generator.files['package.json'])
      this._version =
        packageData.dependencies.vue || packageData.devDependencies.vue
      result = 'vue' + this._version[this._version.indexOf('.') - 1].toString()
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
  language = (options) => {
    return options.promptsLanguage
  }

  /**
   * @description: 判断项目的使用场景是pc端还是移动端
   * @param {*}
   * @return {*}
   */
  scene = (options) => {
    return options.promptsScene ? options.promptsScene : 'pc'
  }

  /**
   * @description: 判断项目是js项目还是ts项目
   * @param {*}
   * @return {*}
   */
  tsOrJs() {
    return this._api.entryFile.endsWith('.ts') ? 'ts' : 'js'
  }
}
