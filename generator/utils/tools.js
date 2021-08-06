/*
 * @Author: your name
 * @Date: 2021-08-06 11:26:06
 * @LastEditTime: 2021-08-06 17:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/utils/tools.js
 */

/**
 * @description: 当前项目的vue版本
 * @param {*}
 * @return {*}
 */
const vueVersion = (api) => {
  let result = 'vue2'
  try {
    let packageData = JSON.parse(api.generator.files['package.json'])
    const version =
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
const language = (options) => {
  return options.promptsLanguage
}

/**
 * @description: 判断项目的使用场景是pc端还是移动端
 * @param {*}
 * @return {*}
 */
const scene = (options) => {
  return options.promptsScene ? options.promptsScene : 'pc'
}

/**
 * @description: 判断项目是js项目还是ts项目
 * @param {*}
 * @return {*}
 */
const tsOrJs = (api) => {
  return api.entryFile.endsWith('.ts') ? 'ts' : 'js'
}

module.exports = (api, options) => {
  return {
    vueVersion: vueVersion(api),
    language: language(options),
    scene: scene(options),
    tsOrJs: tsOrJs(api)
  }
}
