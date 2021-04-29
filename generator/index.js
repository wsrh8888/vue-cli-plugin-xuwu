/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-04-29 21:08:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api, options) => {
  const {consolePlugin, flexiblePlugin, lintStagedPlugin, removeConsolePlugin, initProjectPlugin} = require('./common/index')(api)
  const enumOption = {
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin,
    initProject: initProjectPlugin
  }
  api.extendPackage({
    scripts: {
      "serve_test": "cross-env API_ENV=test vue-cli-service serve",
      "serve_pre": "cross-env API_ENV=pre vue-cli-service serve",
      "serve_prod": "cross-env API_ENV=prod vue-cli-service serve",
      "build_test": "cross-env API_ENV=test vue-cli-service build",
      "build_pre": "cross-env API_ENV=pre vue-cli-service build",
      "build_prod": "cross-env API_ENV=prod vue-cli-service build",
      "build": "cross-env API_ENV=prod vue-cli-service build --report",
    },
    "scripts-info": {
      "serve_test": "启动开发/测试环境",
      "build_test": "打包测试环境",
      "build": "分析打包后包含的模块的大小"
    },
    browserslist: [
      "> 1%",
      "last 2 versions",
      "ios >= 11",
      "safari >= 11"
    ],
    devDependencies: {
      "cross-env": "^7.0.3"
    },
  })


  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element](api, options)
    });
  }

  if (options.useType === 'pc') {
    if (options.configType === 'default') {
      initProjectPlugin(api, options)
      lintStagedPlugin(api, options)
      removeConsolePlugin(api, options)
    } 
  } else if (options.useType === 'mobile') {
    if (options.configType === 'default') {
      initProjectPlugin(api, options)

      removeConsolePlugin(api, options)
      
      lintStagedPlugin(api, options)
       // console插件
      consolePlugin(api, options)
      // 适配插件
      flexiblePlugin(api, options)
    } 
  }


  

};