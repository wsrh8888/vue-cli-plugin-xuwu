/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-08-07 21:56:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-xuwu/generator/index.js
 */

const { BaseInfo, Utils } = require('./utils/tools')
const Controller = require('./controller')

class Template {
  defaultConfig() {
    return {
      web: {
        vue2: {
          pc: [
            Controller.pluginLintStaged,
            Controller.pluginRemoveConsole,
            Controller.pluginCrossEnv,
            Controller.pluginRequest,
            Controller.uiElement
          ],
          mobile: [
            Controller.pluginCrossEnv,
            Controller.pluginRemoveConsole,
            Controller.pluginLintStaged,
            Controller.pluginAddVconsole,
            Controller.pluginFlexible,
            Controller.pluginRequest,
            Controller.uiVant
          ]
        },
        vue3: {
          pc: [
            Controller.pluginLintStaged,
            Controller.pluginRemoveConsole,
            Controller.uiElementVue3,
            Controller.pluginCrossEnv,
            Controller.pluginRequest
          ],
          mobile: [
            Controller.pluginCrossEnv,
            Controller.pluginAddVconsoleVue3,
            Controller.pluginRequest,
            Controller.pluginFlexibleVue3,
            Controller.pluginRemoveConsole,
            Controller.pluginLintStaged,
            Controller.uiVantVue3
          ]
        }
      },
      uniapp: {
        vue2: {
          pc: [
            Controller.pluginLintStaged,
            Controller.pluginSassPlugin,
            Controller.pluginRequest,
            Controller.pluginCrossEnv
          ],
          mobile: [
            Controller.pluginLintStaged,
            Controller.pluginSassPlugin,
            Controller.pluginRequest,
            Controller.pluginCrossEnv
          ]
        }
      }
    }
  }
  enumsPluginConfig() {
    return {
      web: {
        vue2: {
          templateRequest: Controller.pluginRequest,
          templateAddVconsole: Controller.pluginAddVconsole,
          templateFlexible: Controller.pluginFlexible,
          templateLintStaged: Controller.pluginLintStaged,
          templateRemoveConsole: Controller.pluginRemoveConsole,
          templateCrossEnv: Controller.pluginCrossEnv,
          templateVuedraggable: Controller.pluginVuedraggable,
          templateSass: Controller.pluginSassPlugin
        },
        vue3: {
          templateRequest: Controller.pluginRequest,
          templateAddVconsole: Controller.pluginAddVconsoleVue3,
          templateFlexible: Controller.pluginFlexibleVue3,
          templateLintStaged: Controller.pluginLintStaged,
          templateRemoveConsole: Controller.pluginRemoveConsole,
          templateCrossEnv: Controller.pluginCrossEnv,
          templateVuedraggable: Controller.pluginVuedraggable,
          templateSass: Controller.pluginSassPlugin
        }
      },
      uniapp: {
        vue2: {
          templateLintStaged: Controller.pluginLintStaged,
          templateSass: Controller.pluginSassPlugin,
          templateRequest: Controller.pluginRequest,
          templateCrossEnv: Controller.pluginCrossEnv
        }
      }
    }
  }
  enumsUiConfig() {
    return {
      web: {
        vue2: {
          Element: Controller.uiElement,
          Vant: Controller.uiVant
        },
        vue3: {
          Element: Controller.uiElementVue3,
          Vant: Controller.uiVantVue3
        }
      }
    }
  }
}

module.exports = (api, options) => {
  BaseInfo.init(api, options)
  const utils = new Utils()
  const template = new Template()
  if (options.promptsPcConfig !== 'default') {
    options.promptsManuallyConfig.forEach((element) => {
      template.enumsPluginConfig[utils.language()][utils.vueVersion()][
        element
      ]()
    })
  } else {
    template
      .defaultConfig()
      [utils.language()][utils.vueVersion()][utils.scene()].forEach(
        (element) => {
          console.log(element)
        }
      )
  }
  // 处理UI插件
  if (options.promptsUiConfig) {
    template
      .enumsUiConfig()
      [utils.language()][utils.vueVersion()][options.promptsUiConfig]()
  }
}
