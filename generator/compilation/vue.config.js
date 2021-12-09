const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
/**
 * @description: 在vue.config里增加适配相关代码
 * @param {*}
 * @return {void}
 */
class VueConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 在vue.config.js文件中增加px转rem配置
   * @param {*}
   * @return {*}
   */
  vueConfigAddPx2rem() {
    this.api.afterInvoke(() => {
      const fs = require('fs')
      const { EOL } = require('os')
      const contentVueConfig = fs.readFileSync(
        this.api.resolve('./vue.config.js'),
        {
          encoding: 'utf-8'
        }
      )
      const configLines = contentVueConfig.split(/\r?\n/g)
      const configIndex = configLines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (configLines.findIndex((line) => line.match(/css:/)) === -1) {
        configLines[configIndex] += `${EOL}  ${Template.px2remTemplate()}`
        fs.writeFileSync('./vue.config.js', configLines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: 在vue.config.js文件中增加打包后路径位置相关配置
   * @param {*}
   * @return {*}
   */
  vueConfigAddFlexible() {
    const fs = require('fs')
    try {
      fs.readFileSync(this.api.resolve('../template/vue.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.api.render({
        '/vue.config.js': '../template/vue.config.js'
      })
    }
  }
}

module.exports = VueConfig
