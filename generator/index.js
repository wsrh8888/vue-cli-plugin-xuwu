/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-08-08 15:14:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-xuwu/generator/index.js
 */

const Xuwu = require('./utils/tools')
const Controller = require('./controller')
class Template {
  controller = new Controller()
  defaultConfig() {
    return {
      web: {
        vue2: {
          pc: [
            this.controller.pluginLintStaged,
            this.controller.pluginRemoveConsole,
            this.controller.pluginCrossEnv,
            this.controller.pluginRequest,
            this.controller.uiElement
          ],
          mobile: [
            this.controller.pluginCrossEnv,
            this.controller.pluginRemoveConsole,
            this.controller.pluginLintStaged,
            this.controller.pluginAddVconsole,
            this.controller.pluginFlexible,
            this.controller.pluginRequest,
            this.controller.uiVant
          ]
        },
        vue3: {
          pc: [
            this.controller.pluginLintStaged,
            this.controller.pluginRemoveConsole,
            this.controller.uiElementVue3,
            this.controller.pluginCrossEnv,
            this.controller.pluginRequest
          ],
          mobile: [
            this.controller.pluginCrossEnv,
            this.controller.pluginAddVconsoleVue3,
            this.controller.pluginRequest,
            this.controller.pluginFlexibleVue3,
            this.controller.pluginRemoveConsole,
            this.controller.pluginLintStaged,
            this.controller.uiVantVue3
          ]
        }
      },
      uniapp: {
        vue2: {
          pc: [
            this.controller.pluginLintStaged,
            this.controller.pluginSassPlugin,
            this.controller.pluginRequest,
            this.controller.pluginCrossEnv
          ],
          mobile: [
            this.controller.pluginLintStaged,
            this.controller.pluginSassPlugin,
            this.controller.pluginRequest,
            this.controller.pluginCrossEnv
          ]
        }
      }
    }
  }
  enumsPluginConfig() {
    return {
      web: {
        vue2: {
          templateRequest: this.controller.pluginRequest,
          templateAddVconsole: this.controller.pluginAddVconsole,
          templateFlexible: this.controller.pluginFlexible,
          templateLintStaged: this.controller.pluginLintStaged,
          templateRemoveConsole: this.controller.pluginRemoveConsole,
          templateCrossEnv: this.controller.pluginCrossEnv,
          templateVuedraggable: this.controller.pluginVuedraggable,
          templateSass: this.controller.pluginSassPlugin
        },
        vue3: {
          templateRequest: this.controller.pluginRequest,
          templateAddVconsole: this.controller.pluginAddVconsoleVue3,
          templateFlexible: this.controller.pluginFlexibleVue3,
          templateLintStaged: this.controller.pluginLintStaged,
          templateRemoveConsole: this.controller.pluginRemoveConsole,
          templateCrossEnv: this.controller.pluginCrossEnv,
          templateVuedraggable: this.controller.pluginVuedraggable,
          templateSass: this.controller.pluginSassPlugin
        }
      },
      uniapp: {
        vue2: {
          templateLintStaged: this.controller.pluginLintStaged,
          templateSass: this.controller.pluginSassPlugin,
          templateRequest: this.controller.pluginRequest,
          templateCrossEnv: this.controller.pluginCrossEnv
        }
      }
    }
  }
  enumsUiConfig() {
    return {
      web: {
        vue2: {
          Element: this.controller.uiElement,
          Vant: this.controller.uiVant
        },
        vue3: {
          Element: this.controller.uiElementVue3,
          Vant: this.controller.uiVantVue3
        }
      }
    }
  }
  getControllerThis() {
    return this.controller
  }
}

module.exports = (api, options) => {
  Xuwu.init(api, options)
  const template = new Template()
  if (options.promptsPcConfig !== 'default') {
    options.promptsManuallyConfig.forEach((element) => {
      template.enumsPluginConfig[Xuwu.getLanguage()][Xuwu.getVueVersion()][
        element
      ]()
    })
  } else {
    template
      .defaultConfig()
      [Xuwu.getLanguage()][Xuwu.getVueVersion()][Xuwu.getScene()].forEach(
        (element) => {
          element()
        }
      )
  }
  // 处理UI插件
  if (options.promptsUiConfig) {
    template
      .enumsUiConfig()
      [Xuwu.getLanguage()][Xuwu.getVueVersion()][options.promptsUiConfig]()
  }
}
