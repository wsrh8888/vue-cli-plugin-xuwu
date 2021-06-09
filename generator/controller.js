/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-06-09 14:06:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

module.exports = (api, options) => {
  const { addConsoleOption, mainInit } = require('./controller/main')(
    api,
    options
  )
  const { addCssOptions, vueConfigFlexible } =
    require('./controller/vue.config')(api, options)
  const { addCssMediaPlugin } = require('./controller/main.vue')(api, options)
  const {
    packageCommitPre,
    packageRemoveConsole,
    packageAddConsolePanel,
    packageElementUi,
    packageElementPlusUi,
    packageVantUi,
    packageFlexible,
    packageCrossEnv,
    packageSass,
    packageLess,
    packageVuedraggable
  } = require('./controller/package')(api, options)
  const {
    babelConfigReoveConsole,
    babelConfigAddElement,
    babelConfigAddElementPlus
  } = require('./controller/babel.config')(api, options)
  const isTs = api.entryFile.endsWith('.ts')
  const {
    configPlatforms,
    requestPlatforms,
    vantUiPlatforms,
    elementUiPlatforms,
    flexiblePlatforms,
    elementPlusUiPlatforms
  } = require(`./controller/platforms/${
    options.language === 'vue' ? 'vue' : 'uniapp'
  }.${isTs ? 'ts' : 'js'}`)(api, options)
  return {
    ElementUi() {
      packageElementUi()
      elementUiPlatforms()
      babelConfigAddElement()
    },
    VantUi() {
      packageVantUi()
      vantUiPlatforms()
    },
    ElementPlusUi() {
      elementPlusUiPlatforms()
      packageElementPlusUi()
      babelConfigAddElementPlus()
      mainInit()
    },
    /**
     * @description: ajax请求
     * @param {*}
     * @return {*}
     */
    requestPlugin() {
      requestPlatforms()
    },
    sassPlugin() {
      packageSass()
    },
    lessPlugin() {
      packageLess()
    },
    /**
     * @description: 拖拽插件
     * @param {*}
     * @return {*}
     */
    vuedraggablePlugin() {
      packageVuedraggable()
    },
    /**
     * @description: 代码生产环境去掉console
     * @param {*}
     * @return {*}
     */
    removeConsolePlugin() {
      packageRemoveConsole()
      babelConfigReoveConsole()
    },
    /**
     * @description: 增加代码格式化插件prettier+eslint相关
     * @param {*}
     * @return {*}
     */
    lintStagedPlugin() {
      api.render({
        '/.eslintrc.js': './module/_eslintrc.js',
        '/.eslintignore': './module/_eslintignore',
        '/.prettierrc': './module/_prettierrc'
      })
      packageCommitPre()
    },
    /**
     * @description: 添加console相关配置
     * @param {*}
     * @return {*}
     */
    consolePlugin() {
      packageAddConsolePanel()
      addConsoleOption()
    },
    /**
     * @description: 添加适配相关操作
     * @param {*}
     * @return {*}
     */
    flexiblePlugin() {
      vueConfigFlexible()
      packageFlexible()
      flexiblePlatforms()
      addCssOptions()
      addCssMediaPlugin()
    },
    /**
     * @description: 环境区分
     * @param {*}
     * @return {*}
     */
    crossEnvPlugin() {
      packageCrossEnv()
      configPlatforms()
    }
  }
}
