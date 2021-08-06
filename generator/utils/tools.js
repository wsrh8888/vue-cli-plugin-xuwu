/*
 * @Author: your name
 * @Date: 2021-08-06 11:26:06
 * @LastEditTime: 2021-08-06 11:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/utils/tools.js
 */

export const vueVersion = (api) => {
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
