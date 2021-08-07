/*
 * @Author: your name
 * @Date: 2021-04-27 20:35:36
 * @LastEditTime: 2021-08-07 21:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/main.vue.js
 */
const { BaseInfo } = require('../utils/tools')

class MainVue {
  api = BaseInfo.getApi()
  options = BaseInfo.getOption()

  /**
   * @description: 在vue.config里增加适配相关代码
   * @param {*} api
   * @param {*} options
   * @return {*}
   */
  mainVueAddMedia() {
    this.api.afterInvoke(() => {
      const fs = require('fs')
      const { EOL } = require('os')
      const contentVueConfig = fs.readFileSync(
        this.api.resolve('./src/App.vue'),
        {
          encoding: 'utf-8'
        }
      )
      const lines = contentVueConfig.split(/\r?\n/g)
      const index = lines.findIndex((line) => line.match(/<style>/))
      if (
        lines.findIndex((line) =>
          line.match(/@media only screen and (min-width: 375px)/)
        ) === -1
      ) {
        lines[index] += `${EOL}  @media only screen and (min-width: 375px) {
            #app {
              width: 375px;
              height: 100%;
              margin: 0 auto;
            }
          }`
        fs.writeFileSync('./src/App.vue', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = MainVue
