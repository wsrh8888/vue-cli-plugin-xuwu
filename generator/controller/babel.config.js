/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-05-14 17:56:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/babel.config.js
 */
const BabelConfigInit = (api, options) => {
  api.extendPackage({
    browserslist: [
      "> 1%",
      "last 2 versions",
      "ios >= 11",
      "safari >= 11"
    ],
    devDependencies: {
      "@babel/preset-env": "^7.8.3",
      "babel-plugin-transform-class-properties": "^6.24.1"
    },
  })
}
module.exports = (api, options) => {
  return {
    /**
     * @description: 在babel里增加生产环境去掉console  
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    babelConfigReoveConsole() {
      const { EOL } = require('os')
      const fs = require('fs')
      const contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex(line => line.match(/module.exports/))
      if (lines.findIndex(line => line.match(/plugins/)) === -1 || !contentMain) {
        BabelConfigInit(api, options)
        api.render({
          "/babel.config.js": "../module/babel.config.js"
        })
        return
      } 
      api.afterInvoke(() => {
        if (lines.findIndex(line => line.match(/transform-remove-console/)) === -1) {
          lines[renderIndex -1] += `${EOL} if (process.env.API_ENV === 'prod') {
            plugins.push('transform-remove-console')
          }`
          fs.writeFileSync(`./babel.config.js`, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    }
  }
}