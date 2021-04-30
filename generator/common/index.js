/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-04-30 19:32:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

/**
 * @description: config.vue增加css移动端模块
 * @param {*} api
 * @param {*} options
 * @return {*}
 */

module.exports = (api, options) => {
  const {addFlexibleOptions, addConsoleOption} = require('./main')(api, options)
  const {addCssOptions} = require('./vue.config')(api, options)
  const {addCssMediaPlugin} = require('./main.vue')(api, options)
  const {packageCommitPre, packageRemoveConsole, packageInitProject} = require('./package')(api, options)
  const {babelConfigReoveConsole} = require('./babel.config')(api, options)

  return {
    // 拖拽插件
    vuedraggablePlugin() {
      api.extendPackage({
        devDependencies: {
          "vuedraggable": "^2.24.3",
        }
      })
    },
    // 代码生产环境去掉console
    removeConsolePlugin() {
      packageRemoveConsole()
      babelConfigReoveConsole()
    },
    // 增加代码格式化插件prettier+eslint相关
    lintStagedPlugin() {
      api.render({
        "/.eslintrc.js":"./template/_eslintrc.js",
        "/.eslintignore":"./template/_eslintignore",
        "/.prettierrc":"./template/_prettierrc"
      })
      packageCommitPre()
    },
    // 添加console相关配置
    consolePlugin() {
      api.extendPackage({
        devDependencies: {
          "vconsole": "^3.3.4",
        }
      })
      addConsoleOption()
    },
    // 添加适配相关操作
    flexiblePlugin() {
      const fs = require('fs')
      let contentMain
      try {
        contentMain = fs.readFileSync(api.resolve(`./vue.config.js`), { encoding: 'utf-8' })
        console.log(contentMain, '323233333')
      } catch (error) {
        api.render({
          "/vue.config.js":"./template/vue.config.js"
        })
      }
      api.render({
        "/src/utils/rem.js":"./template/rem.js"
      })
      api.extendPackage({
        devDependencies: {
          "lib-flexible": "^0.3.2",
          "postcss-plugin-px2rem": "^0.8.1",
        }
      })
      addFlexibleOptions()
      addCssOptions()
      addCssMediaPlugin()
    },
    // 初始化项目结构
    initProjectPlugin() {
      const isTs = api.entryFile.endsWith('.ts')
      const isVue3 = options.vueVersion === '3'
      api.render("../commonTemplate")
      api.injectImports(api.entryFile, `import './plugins/index'`)
      packageInitProject()
      if (isTs === false && isVue3 === false) {
        api.render("../jsTemplate")
      } else if (isTs === true && isVue3 === false) {
        api.render("../tsTemplate")
      } else if (isTs === false && isVue3 === true) {
        api.render("../jsTemplate")
      } else if (isTs === true && isVue3 === true) {
        api.render("../tsTemplate")
      }
    },
    // 环境区分,
    crossEnvPlugin() {
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
    }
  }
}
