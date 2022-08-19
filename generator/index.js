const Xuwu = require('./utils/xuwu')
const ViteWebVue3 = require('./platform/vite-web-vue3')
const ViteUniappVue3 = require('./platform/vite-uniapp-vue3')
const WebpackWebVue2 = require('./platform/webpack-web-vue2')
const WebpackWebVue3 = require('./platform/webpack-web-vue3')
const WebpackUniappVue2 = require('./platform/webpack-uniapp-vue2')
const WebpackUniappVue3 = require('./platform/webpack-uniapp-vue3')

const Tool = require('./utils/tool')
const chalk = require('chalk')

class Template {
  'vite-web-vue3' = new ViteWebVue3()
  'vite-uniapp-vue3' = new ViteUniappVue3()
  'webpack-web-vue2' = new WebpackWebVue2()
  'webpack-web-vue3' = new WebpackWebVue3()
  'webpack-uniapp-vue2' = new WebpackUniappVue2()
  'webpack-uniapp-vue3' = new WebpackUniappVue3()
}

module.exports = (api, options) => {
  Xuwu.init(api, options)
  if (!Xuwu.checkLanguage()) {
    console.error(chalk.red('👉  请选择匹配的语言'))
    return
  }
  const template = new Template()
  const tool = new Tool()
  let newOptions = [...(options.promptsManuallyConfig || [])]
  if (options.promptsUiConfig) {
    newOptions.push(options.promptsUiConfig)
  }
  let joinParams =
    Xuwu.getBuildToolName() +
    '-' +
    Xuwu.getLanguage() +
    '-' +
    Xuwu.getVueVersion()
  if (options.promptsPcConfig !== 'default') {
    newOptions.forEach((element) => {
      template[joinParams][element]()
    })
  } else {
    template[joinParams][`default${tool.firstUpperCase(Xuwu.getScene())}`]()
  }
}
