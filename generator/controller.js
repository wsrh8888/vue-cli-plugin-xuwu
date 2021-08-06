/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-08-06 17:47:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/console.js
 */

module.exports = (api, options) => {
  const { tsOrJs, language } = require('./utils/tools')(api, options)

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
  const {
    platformAddUtilsConfig,
    platformAddUtilsRequest,
    platformAddPluginsVant,
    platformAddPluginsElement,
    platformAddUtilsRem,
    platformAddPluginsElementVue3,
    platformAddPluginsVantVue3
  } = require(`./controller/platforms/${language}.${tsOrJs}`)(api, options)

  const pluginCrossEnv = () => {
    packageCrossEnv()
    platformAddUtilsConfig()
  }
  const uiElement = () => {
    packageElementUi()
    platformAddPluginsElement()
    babelConfigAddElement()
    mainAddElement()
  }
  const uiVant = () => {
    packageVantUi()
    platformAddPluginsVant()
    mainAddVant()
  }
  const uiVantVue3 = () => {
    packageVantVue3()
    platformAddPluginsVantVue3()
    mainAddVantVue3()
  }
  const uiElementVue3 = () => {
    platformAddPluginsElementVue3()
    packageElementPlusUi()
    babelConfigAddElementPlus()
    mainInit()
    mainAddElementVue3()
  }
  const pluginRequest = () => {
    pluginCrossEnv()
    platformAddUtilsRequest()
  }
  const pluginSassPlugin = () => {
    packageSass()
  }
  const lessPlugin = () => {
    packageLess()
  }
  const pluginVuedraggable = () => {
    packageVuedraggable()
  }
  const pluginRemoveConsole = () => {
    packageRemoveConsole()
    babelConfigReoveConsole()
  }
  const pluginLintStaged = () => {
    api.render({
      '/.eslintrc.js': './module/_eslintrc.js',
      '/.eslintignore': './module/_eslintignore',
      '/.prettierrc': './module/_prettierrc'
    })
    packageCommitPre()
  }

  const pluginAddVconsole = () => {
    pluginCrossEnv()
    packageAddConsolePanel()
    mainAddVconsole()
  }
  const pluginAddVconsoleVue3 = () => {
    pluginCrossEnv()
    mainInit()
    packageAddConsolePanel()
    mainAddVconsoleVue3()
  }
  const pluginFlexibleVue3 = () => {
    pluginCrossEnv()
    vueConfigAddFlexible()
    packageFlexible()
    platformAddUtilsRem()
    mainAddRemVue3()
    vueConfigAddPx2rem()
    mainVueAddMedia()
  }
  const pluginFlexible = () => {
    pluginCrossEnv()
    vueConfigAddFlexible()
    packageFlexible()
    platformAddUtilsRem()
    mainAddRem()
    vueConfigAddPx2rem()
    mainVueAddMedia()
  }
  return {
    uiElement,
    uiVant,
    uiVantVue3,
    uiElementVue3,
    pluginRequest,
    pluginSassPlugin,
    lessPlugin,
    pluginVuedraggable,
    pluginRemoveConsole,
    pluginLintStaged,
    pluginAddVconsole,
    pluginAddVconsoleVue3,
    pluginFlexibleVue3,
    pluginFlexible,
    pluginCrossEnv
  }
}
