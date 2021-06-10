/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-06-10 11:26:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

module.exports = (api, options) => {
  const {
    mainAddVconsole,
    mainInit,
    mainAddRem,
    mainAddRemVue3,
    mainAddVconsoleVue3,
    mainAddElementVue3,
    mainAddElement,
    mainAddVant,
    mainAddVantVue3
  } = require('./controller/main')(api, options)
  const { vueConfigAddPx2rem, vueConfigAddFlexible } =
    require('./controller/vue.config')(api, options)
  const { mainVueAddMedia } = require('./controller/main.vue')(api, options)
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
    packageVuedraggable,
    packageVantVue3
  } = require('./controller/package')(api, options)
  const {
    babelConfigReoveConsole,
    babelConfigAddElement,
    babelConfigAddElementPlus
  } = require('./controller/babel.config')(api, options)
  const isTs = api.entryFile.endsWith('.ts')
  const {
    platformAddUtilsConfig,
    platformAddUtilsRequest,
    platformAddPluginsVant,
    platformAddPluginsElement,
    platformAddUtilsRem,
    platformAddPluginsElementVue3,
    platformAddPluginsVantVue3
  } = require(`./controller/platforms/${
    options.promptsLanguage === 'vue' ? 'vue' : 'uniapp'
  }.${isTs ? 'ts' : 'js'}`)(api, options)
  return {
    uiElement() {
      packageElementUi()
      platformAddPluginsElement()
      babelConfigAddElement()
      mainAddElement()
    },
    uiVant() {
      packageVantUi()
      platformAddPluginsVant()
      mainAddVant()
    },
    uiVantVue3() {
      packageVantVue3()
      platformAddPluginsVantVue3()
      mainAddVantVue3()
    },
    uiElementVue3() {
      platformAddPluginsElementVue3()
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
      platformAddUtilsRequest()
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
      // 依赖 增加环境变量
      packageCrossEnv()
      platformAddUtilsConfig()
      // console配置
      packageAddConsolePanel()
      mainAddVconsole()
    },
    /**
     * @description: 添加vconsole相关配置（vue3）
     * @param {*}
     * @return {*}
     */
    pluginAddVconsoleVue3() {
      //  增加环境变量
      packageCrossEnv()
      platformAddUtilsConfig()
      mainInit()
      packageAddConsolePanel()
      mainAddVconsoleVue3()
    },
    /**
     * @description: 添加适配相关操作（vue3）
     * @param {*}
     * @return {*}
     */
    pluginFlexibleVue3() {
      vueConfigAddFlexible()
      packageFlexible()
      platformAddUtilsRem()
      mainAddRemVue3()
      vueConfigAddPx2rem()
      mainVueAddMedia()
    },
    /**
     * @description: 添加适配相关操作（vue2）
     * @param {*}
     * @return {*}
     */
    pluginFlexible() {
      vueConfigAddFlexible()
      packageFlexible()
      platformAddUtilsRem()
      mainAddRem()
      vueConfigAddPx2rem()
      mainVueAddMedia()
    },
    /**
     * @description: 环境区分
     * @param {*}
     * @return {*}
     */
    pluginCrossEnv() {
      packageCrossEnv()
      platformAddUtilsConfig()
    }
  }
}
