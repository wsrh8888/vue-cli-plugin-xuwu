/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-05-14 20:40:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api, options) => {
  const {
    requestPlugin,
    consolePlugin, 
    flexiblePlugin, 
    lintStagedPlugin, 
    removeConsolePlugin, 
    crossEnvPlugin,
    vuedraggablePlugin
  } = require('./main')(api, options)
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
    }
  }
  const enumOption = {
    requestTemplate: requestPlugin,
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin,
    crossEnv: crossEnvPlugin,
    vuedraggable: vuedraggablePlugin
  }
  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element]()
    });
  } else {
    defaultConfig[options.language][options.useType].forEach(config => {
      config()
    })
  }
};