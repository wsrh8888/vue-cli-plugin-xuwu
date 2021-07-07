/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-06-08 10:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/common/babel.config.js
 */

const babelConfigInit = (api, options) => {
  const { packageBabelInit } = require('./package')(api, options)
  api.render({
    '/babel.config.js': '../module/babel.config.js'
  })
  packageBabelInit()
}
module.exports = (api, options) => {
  const { elementTemplate, elementPlusTemplate, reoveConsoleTemplate } =
    require('../view/babel.config')(api, options)

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
          lines[renderIndex - 1] += `${EOL} ${reoveConsoleTemplate()}`
          fs.writeFileSync('./babel.config.js', lines.join(EOL), {
            encoding: 'utf-8'
          })
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
          lines[renderIndex - 1] += `${EOL}  ${elementTemplate()}`
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
          lines[renderIndex - 1] += `${EOL}  ${elementPlusTemplate()}`
          fs.writeFileSync('./babel.config.js', lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    }
  }
}
