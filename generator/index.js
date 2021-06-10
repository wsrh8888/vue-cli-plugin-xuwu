/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-06-10 10:46:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */

module.exports = (api, options) => {
  const vueVersion = api.rootOptions.vueVersion
  const {
    pluginSassPlugin,
    pluginRequest,
    pluginFlexible,
    pluginLintStaged,
    pluginRemoveConsole,
    pluginCrossEnv,
    pluginVuedraggable,
    uiElement,
    uiVant,
    pluginAddVconsole,
    pluginFlexibleVue3,
    pluginAddVconsoleVue3,
    uiElementVue3
  } = require('./controller')(api, options)
  /**
   * @description: 默认配置
   * @param {*}
   * @return {*}
   */
  const defaultConfig = {
    vue2: {
      pc: [
        pluginLintStaged,
        pluginRemoveConsole,
        pluginCrossEnv,
        pluginRequest,
        uiElement
      ],
      mobile: [
        pluginCrossEnv,
        pluginRemoveConsole,
        pluginLintStaged,
        pluginAddVconsole,
        pluginFlexible,
        pluginRequest,
        uiVant
      ]
    },
    vue3: {
      pc: [],
      mobile: [
        uiElementVue3,
        pluginCrossEnv,
        pluginAddVconsoleVue3,
        pluginRequest,
        pluginFlexibleVue3,
        pluginRemoveConsole,
        pluginLintStaged
      ]
    },
    uniapp: {
      pc: [pluginLintStaged, pluginSassPlugin, pluginRequest, pluginCrossEnv],
      mobile: [
        pluginLintStaged,
        pluginSassPlugin,
        pluginRequest,
        pluginCrossEnv
      ]
    }
  }
  /**
   * @description: 普通的全部配置
   * @param {*}
   * @return {*}
   */
  const enumOption = {
    vue2: {
      templateRequest: pluginRequest,
      templateAddVconsole: pluginAddVconsole,
      templateFlexible: pluginFlexible,
      templateLintStaged: pluginLintStaged,
      templateRemoveConsole: pluginRemoveConsole,
      templateCrossEnv: pluginCrossEnv,
      templateVuedraggable: pluginVuedraggable,
      templateSass: pluginSassPlugin
    },
    vue3: {},
    uniapp: {}
  }
  /**
   * @description: UI的全部配置
   * @param {*}
   * @return {*}
   */
  const enumUiPlugin = {
    vue2: {
      Element: uiElement,
      Vant: uiVant
    },
    vue3: {
      Element: uiElementVue3
    }
  }
  /**
   * @description: 处理自定义配置和默认配置
   * @param {*} options
   * @return {*}
   */
  if (options.promptsPcConfig !== 'default') {
    const promptsLanguage =
      options.promptsLanguage === 'uniapp'
        ? 'uniapp'
        : options.promptsLanguage === 'vue'
        ? vueVersion === '2'
          ? 'vue2'
          : 'vue3'
        : ''
    options.promptsManuallyConfig(promptsLanguage).forEach((element) => {
      enumOption[element]()
    })
  } else {
    const promptsLanguage =
      options.promptsLanguage === 'uniapp'
        ? 'uniapp'
        : options.promptsLanguage === 'vue'
        ? vueVersion === '2'
          ? 'vue2'
          : 'vue3'
        : ''
    console.log(promptsLanguage, options.promptsScene, '2222')
    defaultConfig[promptsLanguage][
      options.promptsScene ? options.promptsScene : 'pc'
    ].forEach((config) => {
      config()
    })
  }
  // 处理UI插件
  if (options.promptsUiConfig) {
    enumUiPlugin[options.promptsUiConfig]()
  }
}
