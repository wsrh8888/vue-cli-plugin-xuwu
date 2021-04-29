/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-04-29 21:06:35
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
  const {packageCommitPre, packageRemoveConsole, packageInitProject} = require('./package')(api)
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
    },
    // 初始化项目结构
    initProjectPlugin() {
      const isTs = api.entryFile.endsWith('.ts')
      const isVue3 = options.vueVersion === '3'
      api.render("./commonTemplate")
      api.injectImports(api.entryFile, `import './plugins/index'`)
      packageInitProject(api)
      if (isTs === false && isVue3 === false) {
        api.render("./jsTemplate")
      } else if (isTs === true && isVue3 === false) {
        api.render("./tsTemplate")
      } else if (isTs === false && isVue3 === true) {
        api.render("./jsTemplate")
      } else if (isTs === true && isVue3 === true) {
        api.render("./tsTemplate")
      }
    }
  }
}
