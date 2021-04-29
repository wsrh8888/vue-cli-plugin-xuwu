/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-04-29 20:29:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api, options) => {
  const {consolePlugin, flexiblePlugin, lintStagedPlugin, removeConsolePlugin} = require('./common/index')(api)

  const isTs = api.entryFile.endsWith('.ts')
  const isVue3 = options.vueVersion === '3'
  const enumOption = {
    consoleLog: consolePlugin,
    flexible: flexiblePlugin,
    lintStaged: lintStagedPlugin,
    removeConsole: removeConsolePlugin
  }
  api.extendPackage({
    dependencies: {
      'axios': '^0.21.1',
      "less": "^3.12.0",
      "less-loader": "^6.2.0",
    },
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
      "@babel/preset-env": "^7.8.3",
      "babel-plugin-transform-class-properties": "^6.24.1",
      "cross-env": "^7.0.3"
    },
  })

  api.render("./commonTemplate")
  api.injectImports(api.entryFile, `import './plugins/index'`)

  if (options.configType !== 'default') {
    options.manuallyValue.forEach(element => {
      enumOption[element](api, options)
    });
  }

  if (options.useType === 'pc') {
    if (options.configType === 'default') {
      lintStagedPlugin(api, options)
      removeConsolePlugin(api, options)
    } 
  } else if (options.useType === 'mobile') {
    if (options.configType === 'default') {
      removeConsolePlugin(api, options)
      
      lintStagedPlugin(api, options)
       // console插件
      consolePlugin(api, options)
      // 适配插件
      flexiblePlugin(api, options)
    } 
  }


  if (isTs === false && isVue3 === false) {
    api.render("./jsTemplate")
  } else if (isTs === true && isVue3 === false) {
    api.render("./tsTemplate")
  } else if (isTs === false && isVue3 === true) {
    api.render("./jsTemplate")
  } else if (isTs === true && isVue3 === true) {
    api.render("./tsTemplate")
  }

};