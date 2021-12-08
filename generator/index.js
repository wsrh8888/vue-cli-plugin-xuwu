const Xuwu = require('./utils/xuwu')
const Compiler = require('./Compiler')
class Template {
  compiler = new Compiler()
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
            this.compiler.pluginLintStaged,
            this.compiler.pluginRemoveConsole,
            this.compiler.pluginCrossEnv,
            this.compiler.pluginRequest,
            this.compiler.uiElement,
            this.compiler.pluginEs6ToEs5
          ],
          mobile: [
            this.compiler.pluginCrossEnv,
            this.compiler.pluginRemoveConsole,
            this.compiler.pluginLintStaged,
            this.compiler.pluginAddVconsole,
            this.compiler.pluginFlexible,
            this.compiler.pluginRequest,
            this.compiler.uiVant,
            this.compiler.pluginEs6ToEs5
          ]
        },
        vue3: {
          pc: [
            this.compiler.pluginLintStaged,
            this.compiler.pluginRemoveConsole,
            this.compiler.uiElementVue3,
            this.compiler.pluginCrossEnv,
            this.compiler.pluginRequest,
            this.compiler.pluginEs6ToEs5
          ],
          mobile: [
            this.compiler.pluginCrossEnv,
            this.compiler.pluginAddVconsoleVue3,
            this.compiler.pluginRequest,
            this.compiler.pluginFlexibleVue3,
            this.compiler.pluginRemoveConsole,
            this.compiler.pluginLintStaged,
            this.compiler.uiVantVue3,
            this.compiler.pluginEs6ToEs5
          ]
        }
      },
      uniapp: {
        vue2: {
          pc: [
            this.compiler.pluginLintStaged,
            this.compiler.pluginSassPlugin,
            this.compiler.pluginRequest,
            this.compiler.pluginCrossEnv
          ],
          mobile: [
            this.compiler.pluginLintStaged,
            this.compiler.pluginSassPlugin,
            this.compiler.pluginRequest,
            this.compiler.pluginCrossEnv
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
          templateRequest: this.compiler.pluginRequest,
          templateAddVconsole: this.compiler.pluginAddVconsole,
          templateFlexible: this.compiler.pluginFlexible,
          templateLintStaged: this.compiler.pluginLintStaged,
          templateRemoveConsole: this.compiler.pluginRemoveConsole,
          templateCrossEnv: this.compiler.pluginCrossEnv,
          templateVuedraggable: this.compiler.pluginVuedraggable,
          templateSass: this.compiler.pluginSassPlugin,
          templateES5: this.compiler.pluginEs6ToEs5
        },
        vue3: {
          templateRequest: this.compiler.pluginRequest,
          templateAddVconsole: this.compiler.pluginAddVconsoleVue3,
          templateFlexible: this.compiler.pluginFlexibleVue3,
          templateLintStaged: this.compiler.pluginLintStaged,
          templateRemoveConsole: this.compiler.pluginRemoveConsole,
          templateCrossEnv: this.compiler.pluginCrossEnv,
          templateVuedraggable: this.compiler.pluginVuedraggable,
          templateSass: this.compiler.pluginSassPlugin,
          templateES5: this.compiler.pluginEs6ToEs5
        }
      },
      uniapp: {
        vue2: {
          templateLintStaged: this.compiler.pluginLintStaged,
          templateSass: this.compiler.pluginSassPlugin,
          templateRequest: this.compiler.pluginRequest,
          templateCrossEnv: this.compiler.pluginCrossEnv
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
          AntDesign: this.compiler.uiAntDesign,
          Element: this.compiler.uiElement,
          Vant: this.compiler.uiVant
        },
        vue3: {
          Element: this.compiler.uiElementVue3,
          Vant: this.compiler.uiVantVue3,
          AntDesign: this.compiler.uiAntDesignVue3
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
