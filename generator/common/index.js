/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-04-29 20:25:39
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
  const {packageCommitPre, packageRemoveConsole} = require('./package')(api)
  const {babelConfigReoveConsole} = require('./babel.config')(api)

  return {
    // 代码生产环境去掉console
    removeConsolePlugin() {
      packageRemoveConsole()
      babelConfigReoveConsole()
    },
    // 增加代码格式化插件prettier+eslint相关
    lintStagedPlugin() {
      api.render({
        "/.eslintrc.js":"./template/_eslintrc.js",
        "/.prettierrc":"./template/_prettierrc"
      })
      packageCommitPre()
    },
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
