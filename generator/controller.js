/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-06-09 15:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

module.exports = (api, options) => {
  const {
    addConsoleOption,
    mainInit,
    mainAddRem,
    mainAddVconsoleVue3,
    mainAddElementVue3
  } = require('./controller/main')(api, options)
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
    options.promptsLanguage === 'vue' ? 'vue' : 'uniapp'
  }.${isTs ? 'ts' : 'js'}`)(api, options)
  return {
    uiElement() {
      packageElementUi()
      elementUiPlatforms()
      babelConfigAddElement()
    },
    uiVant() {
      packageVantUi()
      vantUiPlatforms()
    },
    uiElementVue3() {
      elementPlusUiPlatforms()
      packageElementPlusUi()
      babelConfigAddElementPlus()
      mainInit()
      mainAddElementVue3()
    },
    /**
     * @description: ajax请求
     * @param {*}
     * @return {*}
     */
    pluginRequest() {
      requestPlatforms()
    },
    pluginSassPlugin() {
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
    pluginVuedraggable() {
      packageVuedraggable()
    },
    /**
     * @description: 代码生产环境去掉console
     * @param {*}
     * @return {*}
     */
    pluginRemoveConsole() {
      packageRemoveConsole()
      babelConfigReoveConsole()
    },
    /**
     * @description: 增加代码格式化插件prettier+eslint相关
     * @param {*}
     * @return {*}
     */
    pluginLintStaged() {
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
    pluginAddVconsole() {
      //  增加环境变量
      packageCrossEnv()
      configPlatforms()
      mainInit()
      mainAddVconsoleVue3()
      packageAddConsolePanel()
      addConsoleOption()
    },
    /**
     * @description: 添加vconsole相关配置（vue3）
     * @param {*}
     * @return {*}
     */
    pluginAddVconsoleVue3() {
      //  增加环境变量
      packageCrossEnv()
      configPlatforms()
      mainInit()
      packageAddConsolePanel()
      mainAddVconsoleVue3()
    },
    /**
     * @description: 添加适配相关操作
     * @param {*}
     * @return {*}
     */
    pluginFlexible() {
      vueConfigFlexible()
      packageFlexible()
      flexiblePlatforms()
      mainAddRem()
      addCssOptions()
      addCssMediaPlugin()
    },
    /**
     * @description: 环境区分
     * @param {*}
     * @return {*}
     */
    pluginCrossEnv() {
      packageCrossEnv()
      configPlatforms()
    }
  }
}
