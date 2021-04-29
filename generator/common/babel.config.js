/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-04-29 20:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/babel.config.js
 */
module.exports = (api, options) => {
  return {
    /**
     * @description: 在babel里增加生产环境去掉console  
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    babelConfigReoveConsole() {
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex(line => line.match(/module.exports/))
        if (lines.findIndex(line => line.match(/transform-remove-console/)) === -1) {
          if (lines.findIndex(line => line.match(/plugins/)) === -1) {
            api.render({
              "/babel.config.js": "./template/babel.config.js"
            })
          } else {
            lines[renderIndex -1] += `${EOL} if (process.env.API_ENV === 'prod') {
              plugins.push('transform-remove-console')
            }`
          }
          
          fs.writeFileSync(`./babel.config.js`, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    },
  }
}