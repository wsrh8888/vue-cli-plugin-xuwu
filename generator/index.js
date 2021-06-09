/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-06-09 11:33:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */

module.exports = (api, options) => {
  const vueVersion = api.rootOptions.vueVersion
  const {
    sassPlugin,
    requestPlugin,
    consolePlugin,
    flexiblePlugin,
    lintStagedPlugin,
    removeConsolePlugin,
    crossEnvPlugin,
    vuedraggablePlugin,
    ElementUi,
    VantUi,
    ElementPlusUi
  } = require('./controller')(api, options)
  /**
   * @description: 默认配置
   * @param {*}
   * @return {*}
   */
  const defaultConfig = {
    vue2: {
      pc: [
        lintStagedPlugin,
        removeConsolePlugin,
        crossEnvPlugin,
        requestPlugin,
        ElementUi
      ],
      mobile: [
        crossEnvPlugin,
        removeConsolePlugin,
        lintStagedPlugin,
        consolePlugin,
        flexiblePlugin,
        requestPlugin,
        VantUi
      ]
    },
    vue3: {
      pc: [],
      mobile: [
        ElementPlusUi,
        crossEnvPlugin,
        consolePlugin,
        requestPlugin,
        flexiblePlugin,
        removeConsolePlugin,
        lintStagedPlugin
      ]
    },
    uniapp: {
      pc: [lintStagedPlugin, sassPlugin, requestPlugin, crossEnvPlugin],
      mobile: [lintStagedPlugin, sassPlugin, requestPlugin, crossEnvPlugin]
    }
  }
  /**
   * @description: 普通的全部配置
   * @param {*}
   * @return {*}
   */
  const enumOption = {
    vue2: {
      requestTemplate: requestPlugin,
      consoleLog: consolePlugin,
      flexible: flexiblePlugin,
      lintStaged: lintStagedPlugin,
      removeConsole: removeConsolePlugin,
      crossEnv: crossEnvPlugin,
      vuedraggable: vuedraggablePlugin,
      sass: sassPlugin
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
      Element: ElementUi,
      Vant: VantUi
    },
    vue3: {
      Element: ElementPlusUi
    }
  }
  /**
   * @description: 处理自定义配置和默认配置
   * @param {*} options
   * @return {*}
   */
  if (options.configType !== 'default') {
    const language =
      options.language === 'uniapp'
        ? 'uniapp'
        : options.language === 'vue'
        ? vueVersion === '2'
          ? 'vue2'
          : 'vue3'
        : ''
    options.manuallyValue(language).forEach((element) => {
      enumOption[element]()
    })
  } else {
    const language =
      options.language === 'uniapp'
        ? 'uniapp'
        : options.language === 'vue'
        ? vueVersion === '2'
          ? 'vue2'
          : 'vue3'
        : ''
    console.log(language, options.useType, '2222')
    defaultConfig[language][options.useType ? options.useType : 'pc'].forEach(
      (config) => {
        config()
      }
    )
  }
  // 处理UI插件
  if (options.uiPlugin) {
    enumUiPlugin[options.uiPlugin]()
  }
}
