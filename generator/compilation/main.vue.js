const Xuwu = require('../utils/xuwu')
const Fs = require('fs')
const Template = require('../static/template')
const { EOL } = require('os')

class MainVue {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  getMainVueFileName() {
    return './src/App.vue'
  }
  writeViteConfigContent(code) {
    Fs.writeFileSync(this.getMainVueFileName(), code, {
      encoding: 'utf-8'
    })
  }
  getAppVueContent() {
    return Fs.readFileSync(this.api.resolve(this.getMainVueFileName()), {
      encoding: 'utf-8'
    })
  }

  /**
   * @description: 在vue.config里增加适配相关代码
   * @param {*} api
   * @param {*} options
   * @return {*}
   */
  mainVueAddMedia() {
    this.api.afterInvoke(() => {
      let contentMain = this.getAppVueContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) =>
          line.match(/\@media only screen and \(min-width: 375px\)/)
        ) === -1
      ) {
        lines[lines.length - 1] += `${EOL}  ${Template.mainVueTemplate()}`
        Fs.writeFileSync('./src/App.vue', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = MainVue
