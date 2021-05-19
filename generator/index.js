/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-05-18 19:49:48
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
    vuedraggablePlugin
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
  const enumOption = {
    requestTemplate: requestPlugin,
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin,
    crossEnv: crossEnvPlugin,
    vuedraggable: vuedraggablePlugin,
    sass: sassPlugin
  }
  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element]()
    });
  } else {
    console.log(options.language)
    defaultConfig[options.language][options.useType ? options.useType : 'pc'].forEach(config => {
      config()
    })
  }
};