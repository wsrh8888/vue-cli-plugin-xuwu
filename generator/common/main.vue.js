/*
 * @Author: your name
 * @Date: 2021-04-27 20:35:36
 * @LastEditTime: 2021-04-27 20:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/main.vue.js
 */
module.exports = (api, options) => {
  return {
    /**
     * @description: 在vue.config里增加适配相关代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    addCssMediaPlugin() {
      api.afterInvoke(() => {
        const fs = require('fs')
        const { EOL } = require('os')
        const contentVueConfig = fs.readFileSync(api.resolve(`./src/App.vue`), { encoding: 'utf-8' })
        const lines = contentVueConfig.split(/\r?\n/g)
        const index = lines.findIndex(line => line.match(/<style lang="less">/))
        if (lines.findIndex(line => line.match(/@media only screen and (min-width: 375px)/)) === -1) {
          lines[index] += `${EOL}  @media only screen and (min-width: 375px) {
            #app {
              width: 375px;
              height: 100%;
              margin: 0 auto;
            }
          }`
          fs.writeFileSync(`./src/App.vue`, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    }
  }
}