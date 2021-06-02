/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-06-02 10:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api, options) => {
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
    AntDesignUi
  } = require('./controller')(api, options)
  const defaultConfig = {
    vue: {
      pc: [ 
        lintStagedPlugin, 
        removeConsolePlugin, 
        crossEnvPlugin, 
        requestPlugin
      ],
      mobile: [ 
        crossEnvPlugin, 
        removeConsolePlugin, 
        lintStagedPlugin, 
        consolePlugin, 
        flexiblePlugin, 
        requestPlugin
      ]
    },
    uniapp: {
      pc: [
        lintStagedPlugin,
        sassPlugin,
        requestPlugin,
        crossEnvPlugin
      ],
      mobile: [
        lintStagedPlugin,
        sassPlugin,
        requestPlugin,
        crossEnvPlugin
      ]
    }
  }
  // 普通配置插件
  const enumOption = {
    requestTemplate: requestPlugin,
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin,
    crossEnv: crossEnvPlugin,
    vuedraggable: vuedraggablePlugin,
    sass: sassPlugin,
  }
  // UI插件
  const enumUiPlugin = {
    Element: ElementUi,
    Vant: VantUi,
    AntDesign: AntDesignUi
  }
  /**
   * @description: 处理自定义配置和默认配置
   * @param {*} options
   * @return {*}
   */  
  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element]()
    });
  } else {
    defaultConfig[options.language][options.useType ? options.useType : 'pc'].forEach(config => {
      config()
    })
  }
  // 处理UI插件
  if (options.uiPlugin) {
    enumUiPlugin[options.uiPlugin]()
  }
};