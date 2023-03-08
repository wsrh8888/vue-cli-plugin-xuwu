const Xuwu = require('./utils/xuwu')
const Vite2UniappVue3 = require('./platform/vite2-uniapp-vue3')
const Vite3UniappVue3 = require('./platform/vite3-uniapp-vue3')
const Vite4UniappVue3 = require('./platform/vite4-uniapp-vue3')
const Vite2WebVue3 = require('./platform/vite2-web-vue3')
const Vite3WebVue3 = require('./platform/vite3-web-vue3')
const Vite4WebVue3 = require('./platform/vite4-web-vue3')
const WebpackWebVue2 = require('./platform/webpack-web-vue2')
const WebpackWebVue3 = require('./platform/webpack-web-vue3')
const WebpackUniappVue2 = require('./platform/webpack-uniapp-vue2')
const WebpackUniappVue3 = require('./platform/webpack-uniapp-vue3')

const { firstUpperCase } = require('./utils/tool')

class Template {
  'vite2-web-vue3' = new Vite2WebVue3()
  'vite3-web-vue3' = new Vite3WebVue3()
  'vite4-web-vue3' = new Vite4WebVue3()
  'webpack-web-vue2' = new WebpackWebVue2()
  'webpack-web-vue3' = new WebpackWebVue3()
  'webpack-uniapp-vue2' = new WebpackUniappVue2()
  'webpack-uniapp-vue3' = new WebpackUniappVue3()
  'vite2-uniapp-vue3' = new Vite2UniappVue3()
  'vite3-uniapp-vue3' = new Vite3UniappVue3()
  'vite4-uniapp-vue3' = new Vite4UniappVue3()
}

module.exports = (api, options) => {
  Xuwu.init(api, options)
  const template = new Template()
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
  if (options.promptsConfig !== 'default') {
    newOptions.forEach((element) => {
      template[joinParams][element]()
    })
  } else {
    template[joinParams][`default${firstUpperCase(Xuwu.getScene())}`]()
  }
}
