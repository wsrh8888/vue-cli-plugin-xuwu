const Xuwu = require('./utils/xuwu')
const ViteWebVue3 = require('./platform/vite-web-vue3')
const WebpackWebVue2 = require('./platform/webpack-web-vue2')

class Template {
  'vite-web-vue3' = new ViteWebVue3()
  'webpack-web-vue2' = new WebpackWebVue2
}

module.exports = (api, options) => {
  Xuwu.init(api, options)
  const template = new Template()
  const newOptions = [
    ...options.promptsManuallyConfig || [],
    options.promptsUiConfig
  ]
  let data = Xuwu.getBuildToolName() + '-' +
        Xuwu.getLanguage() +
        '-' +
        Xuwu.getVueVersion()
  if (options.promptsPcConfig !== 'default') {
    console.log(data, 'data')

    newOptions.forEach((element) => {

      template[data][element]()
    })
  } else {
    template[data]["defaultTemplate"]()
  }
}
