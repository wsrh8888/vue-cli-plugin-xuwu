/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:28
 * @LastEditTime: 2021-08-09 14:43:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/vue.config.js
 */

const Xuwu = require('../utils/tools')
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
      fs.readFileSync(this.api.resolve('../module/vue.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.api.render({
        '/vue.config.js': '../module/vue.config.js'
      })
    }
  }
}

module.exports = VueConfig
