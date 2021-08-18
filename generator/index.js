/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-08-18 10:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-xuwu/generator/index.js
 */

const Xuwu = require('./utils/xuwu')
const Controller = require('./controller')
class Template {
  controller = new Controller()
  /**
   * @description: 默认安装的逻辑插件
   * @param {*}
   * @return {*}
   */
  defaultConfig() {
    return {
      web: {
        vue2: {
          pc: [
            this.controller.pluginLintStaged,
            this.controller.pluginRemoveConsole,
            this.controller.pluginCrossEnv,
            this.controller.pluginRequest,
            this.controller.uiElement,
            this.controller.pluginEs6ToEs5
          ],
          mobile: [
            this.controller.pluginCrossEnv,
            this.controller.pluginRemoveConsole,
            this.controller.pluginLintStaged,
            this.controller.pluginAddVconsole,
            this.controller.pluginFlexible,
            this.controller.pluginRequest,
            this.controller.uiVant,
            this.controller.pluginEs6ToEs5
          ]
        },
        vue3: {
          pc: [
            this.controller.pluginLintStaged,
            this.controller.pluginRemoveConsole,
            this.controller.uiElementVue3,
            this.controller.pluginCrossEnv,
            this.controller.pluginRequest,
            this.controller.pluginEs6ToEs5
          ],
          mobile: [
            this.controller.pluginCrossEnv,
            this.controller.pluginAddVconsoleVue3,
            this.controller.pluginRequest,
            this.controller.pluginFlexibleVue3,
            this.controller.pluginRemoveConsole,
            this.controller.pluginLintStaged,
            this.controller.uiVantVue3,
            this.controller.pluginEs6ToEs5
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
  /**
   * @description: 全部的逻辑插件清单
   * @param {*}
   * @return {*}
   */
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
          templateSass: this.controller.pluginSassPlugin,
          templateES5: this.controller.pluginEs6ToEs5
        },
        vue3: {
          templateRequest: this.controller.pluginRequest,
          templateAddVconsole: this.controller.pluginAddVconsoleVue3,
          templateFlexible: this.controller.pluginFlexibleVue3,
          templateLintStaged: this.controller.pluginLintStaged,
          templateRemoveConsole: this.controller.pluginRemoveConsole,
          templateCrossEnv: this.controller.pluginCrossEnv,
          templateVuedraggable: this.controller.pluginVuedraggable,
          templateSass: this.controller.pluginSassPlugin,
          templateES5: this.controller.pluginEs6ToEs5
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
  /**
   * @description: 全部的ui插件清单
   * @param {*}
   * @return {*}
   */
  enumsUiConfig() {
    return {
      web: {
        vue2: {
          AntDesign: this.controller.uiAntDesign,
          Element: this.controller.uiElement,
          Vant: this.controller.uiVant
        },
        vue3: {
          Element: this.controller.uiElementVue3,
          Vant: this.controller.uiVantVue3,
          AntDesign: this.controller.uiAntDesignVue3
        }
      }
    }
  }
}

module.exports = (api, options) => {
  Xuwu.init(api, options)
  const template = new Template()
  if (options.promptsPcConfig !== 'default') {
    options.promptsManuallyConfig.forEach((element) => {
      template
        .enumsPluginConfig()
        [Xuwu.getLanguage()][Xuwu.getVueVersion()][element]()
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
