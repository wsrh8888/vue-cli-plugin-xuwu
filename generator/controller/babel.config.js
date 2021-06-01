/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-06-01 11:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/babel.config.js
 */

const BabelConfigInit = (api, options) => {
  console.log('444444')
  api.render({
    "/babel.config.js": "../module/babel.config.js"
  })
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
      let contentMain
      try {
         contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
      } catch (error) {
        BabelConfigInit(api, options)
        contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
      }
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex(line => line.match(/plugins/)) === -1) {
        BabelConfigInit(api, options)
      } 
      api.afterInvoke(() => {
        contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
        lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex(line => line.match(/module.exports/))        
        if (lines.findIndex(line => line.match(/transform-remove-console/)) === -1) {
          lines[renderIndex -1] += `${EOL} if (process.env.API_ENV === 'prod') {
            plugins.push('transform-remove-console')
          }`
          fs.writeFileSync(`./babel.config.js`, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    },
    /**
     * @description: 在babel中增加element中相关的按需引入配置
     * @param {*}
     * @return {*}
     */    
    babelConfigAddElement() {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain
      try {
         contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
      } catch (error) {
        BabelConfigInit(api, options)
        contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
      }
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex(line => line.match(/plugins/)) === -1) {
        BabelConfigInit(api, options)
      } 
      api.afterInvoke(() => {
        contentMain = fs.readFileSync(api.resolve(`./babel.config.js`), { encoding: 'utf-8' })
        lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex(line => line.match(/module.exports/))        
        if (lines.findIndex(line => line.match(/element-ui/)) === -1) {
          lines[renderIndex -1] += `${EOL}  plugins.push(
            [
              "component",
              {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
              },
        
            ],
          )`
          fs.writeFileSync(`./babel.config.js`, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    }
  }
}