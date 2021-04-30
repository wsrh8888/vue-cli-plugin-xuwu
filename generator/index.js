/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-04-30 17:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api, options) => {
  const {consolePlugin, flexiblePlugin, lintStagedPlugin, removeConsolePlugin, initProjectPlugin, crossEnvPlugin} = require('./common/index')(api, options)
  const enumOption = {
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin,
    initProject: initProjectPlugin,
    crossEnv: crossEnvPlugin
  }
  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element]()
    });
  }

  if (options.useType === 'pc') {
    if (options.configType === 'default') {
      initProjectPlugin()
      lintStagedPlugin()
      removeConsolePlugin()
      crossEnvPlugin()
    } 
  } else if (options.useType === 'mobile') {
    if (options.configType === 'default') {
      initProjectPlugin()
      crossEnvPlugin()
      removeConsolePlugin()
      
      lintStagedPlugin()
       // console插件
      consolePlugin()
      // 适配插件
      flexiblePlugin()
    } 
  }
};