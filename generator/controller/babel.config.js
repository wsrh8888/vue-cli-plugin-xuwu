/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-08-07 19:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/babel.config.js
 */
const BabelConfig = require('../static/babel.config')

const babelConfigInit = (api, options) => {
  const { packageBabelInit } = require('./package')(api, options)
  api.render({
    '/babel.config.js': '../module/babel.config.js'
  })
  packageBabelInit()
}

/**
 * @description: 在babel里增加生产环境去掉console
 * @param {*} api
 * @param {*} options
 * @return {*}
 */

module.exports = (api, options) => {
  return {
    babelConfigReoveConsole() {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain
      try {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        babelConfigInit(api, options)
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      }
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
        babelConfigInit(api, options)
      }
      api.afterInvoke(() => {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
        lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) =>
          line.match(/module.exports/)
        )
        if (
          lines.findIndex((line) => line.match(/transform-remove-console/)) ===
          -1
        ) {
          lines[
            renderIndex - 1
          ] += `${EOL} ${BabelConfig.reoveConsoleTemplate()}`
          fs.writeFileSync('./babel.config.js', lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    babelConfigAddElementPlus() {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain
      try {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        babelConfigInit(api, options)
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      }
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
        babelConfigInit(api, options)
      }
      api.afterInvoke(() => {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
        lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) =>
          line.match(/module.exports/)
        )
        if (lines.findIndex((line) => line.match(/element-plus/)) === -1) {
          lines[
            renderIndex - 1
          ] += `${EOL}  ${BabelConfig.elementPlusTemplate()}`
          fs.writeFileSync('./babel.config.js', lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    babelConfigAddElement() {
      const { EOL } = require('os')
      const fs = require('fs')
      let contentMain
      try {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        babelConfigInit(api, options)
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
      }
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
        babelConfigInit(api, options)
      }
      api.afterInvoke(() => {
        contentMain = fs.readFileSync(api.resolve('./babel.config.js'), {
          encoding: 'utf-8'
        })
        lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) =>
          line.match(/module.exports/)
        )
        if (lines.findIndex((line) => line.match(/element-ui/)) === -1) {
          lines[renderIndex - 1] += `${EOL}  ${BabelConfig.elementTemplate()}`
          fs.writeFileSync('./babel.config.js', lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    }
  }
}
