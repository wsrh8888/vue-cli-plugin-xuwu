/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-06-04 20:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */

module.exports = (api, options) => {
  const { addConsoleOption, mainAddPlugins } = require('./controller/main')(
    api,
    options
  )
  const { addCssOptions, vueConfigFlexible } =
    require('./controller/vue.config')(api, options)
  const { addCssMediaPlugin } = require('./controller/main.vue')(api, options)
  const {
    packageCommitPre,
    packageRemoveConsole,
    packageAddConsolePanel,
    packageElementUi,
    packageVantUi,
    packageFlexible,
    packageCrossEnv,
    packageSass,
    packageLess,
    packageVuedraggable
  } = require('./controller/package')(api, options)
  const { babelConfigReoveConsole, babelConfigAddElement } =
    require('./controller/babel.config')(api, options)
  const isTs = api.entryFile.endsWith('.ts')
  const {
    configPlatforms,
    requestPlatforms,
    vantUiPlatforms,
    elementUiPlatforms,
    pluginsPlatforms,
    flexiblePlatforms
  } = require(`./controller/platforms/${
    options.language === 'vue' ? 'web' : 'uniapp'
  }.${isTs ? 'ts' : 'js'}`)(api, options)
  return {
    ElementUi() {
      packageElementUi()
      elementUiPlatforms()
      babelConfigAddElement()
      mainAddPlugins()
      pluginsPlatforms()
    },
    VantUi() {
      pluginsPlatforms()
      packageVantUi()
      vantUiPlatforms()
      mainAddPlugins()
    },
    // 请求
    requestPlugin() {
      requestPlatforms()
    },
    sassPlugin() {
      packageSass()
    },
    lessPlugin() {
      packageLess()
    },
    // 拖拽插件
    vuedraggablePlugin() {
      packageVuedraggable()
    },
    // 代码生产环境去掉console
    removeConsolePlugin() {
      packageRemoveConsole()
      babelConfigReoveConsole()
    },
    // 增加代码格式化插件prettier+eslint相关
    lintStagedPlugin() {
      api.render({
        '/.eslintrc.js': './module/_eslintrc.js',
        '/.eslintignore': './module/_eslintignore',
        '/.prettierrc': './module/_prettierrc'
      })
      packageCommitPre()
    },
    // 添加console相关配置
    consolePlugin() {
      packageAddConsolePanel()
      addConsoleOption()
    },
    // 添加适配相关操作
    flexiblePlugin() {
      console.log('3433333333')
      vueConfigFlexible()
      packageFlexible()
      pluginsPlatforms()
      flexiblePlatforms()
      addCssOptions()
      addCssMediaPlugin()
    },
    // 环境区分
    crossEnvPlugin() {
      packageCrossEnv()
      configPlatforms()
    }
  }
}
