/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-04-27 21:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

/**
 * @description: config.vue增加css移动端模块
 * @param {*} api
 * @param {*} options
 * @return {*}
 */

module.exports = (api, options) => {
  const {addFlexibleOptions, addConsoleOption} = require('./main')(api)
  const {addCssOptions} = require('./vue.config')(api)
  const {addCssMediaPlugin} = require('./main.vue')(api)

  return {
    // 添加console相关配置
    consolePlugin() {
      api.extendPackage({
        devDependencies: {
          "vconsole": "^3.3.4",
        }
      })
      addConsoleOption()
    },
    // 添加适配相关操作
    flexiblePlugin() {
      api.render({
        "/src/utils/rem.js":"./template/rem.js"
      })
      api.extendPackage({
        devDependencies: {
          "lib-flexible": "^0.3.2",
          "postcss-plugin-px2rem": "^0.8.1",
        }
      })
      addFlexibleOptions()
      addCssOptions()
      addCssMediaPlugin()
    }
  }
}
