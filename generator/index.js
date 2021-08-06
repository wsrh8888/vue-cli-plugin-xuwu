/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-08-06 17:46:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-xuwu/generator/index.js
 */

module.exports = (api, options) => {
  const { vueVersion, language, scene } = require('./utils/tools')(api, options)
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
    uiElementVue3,
    uiVantVue3
  } = require('./controller')(api, options)
  /**
   * @description: 默认配置
   * @param {*}
   * @return {*}
   */
  const defaultConfig = {
    web: {
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
        pc: [
          pluginLintStaged,
          pluginRemoveConsole,
          uiElementVue3,
          pluginCrossEnv,
          pluginRequest
        ],
        mobile: [
          pluginCrossEnv,
          pluginAddVconsoleVue3,
          pluginRequest,
          pluginFlexibleVue3,
          pluginRemoveConsole,
          pluginLintStaged,
          uiVantVue3
        ]
      }
    },
    uniapp: {
      vue2: {
        pc: [pluginLintStaged, pluginSassPlugin, pluginRequest, pluginCrossEnv],
        mobile: [
          pluginLintStaged,
          pluginSassPlugin,
          pluginRequest,
          pluginCrossEnv
        ]
      }
    }
  }
  /**
   * @description: 普通的全部配置
   * @param {*}
   * @return {*}
   */
  const enumsPluginConfig = {
    web: {
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
      vue3: {
        templateRequest: pluginRequest,
        templateAddVconsole: pluginAddVconsoleVue3,
        templateFlexible: pluginFlexibleVue3,
        templateLintStaged: pluginLintStaged,
        templateRemoveConsole: pluginRemoveConsole,
        templateCrossEnv: pluginCrossEnv,
        templateVuedraggable: pluginVuedraggable,
        templateSass: pluginSassPlugin
      }
    },
    uniapp: {
      vue2: {
        templateLintStaged: pluginLintStaged,
        templateSass: pluginSassPlugin,
        templateRequest: pluginRequest,
        templateCrossEnv: pluginCrossEnv
      }
    }
  }
  /**
   * @description: UI的全部配置
   * @param {*}
   * @return {*}
   */
  const enumsUiConfig = {
    web: {
      vue2: {
        Element: uiElement,
        Vant: uiVant
      },
      vue3: {
        Element: uiElementVue3,
        Vant: uiVantVue3
      }
    }
  }
  /**
   * @description: 处理自定义配置和默认配置
   * @param {*} options
   * @return {*}
   */
  if (options.promptsPcConfig !== 'default') {
    options.promptsManuallyConfig.forEach((element) => {
      enumsPluginConfig[language][vueVersion][element]()
    })
  } else {
    defaultConfig[language][vueVersion][scene].forEach((config) => {
      config()
    })
  }
  // 处理UI插件
  if (options.promptsUiConfig) {
    enumsUiConfig[language][vueVersion][options.promptsUiConfig]()
  }
}
