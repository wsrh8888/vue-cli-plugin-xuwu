/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-08-07 21:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/babel.config.js
 */
const StaticBabelConfig = require('../static/babel.config')
const { BaseInfo } = require('../utils/tools')

class BabelConfig {
  api = BaseInfo.getApi()
  options = BaseInfo.getOption()
  babelConfigReoveConsole() {
    const { EOL } = require('os')
    const fs = require('fs')
    let contentMain
    try {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.babelConfigInit()
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    }
    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (
        lines.findIndex((line) => line.match(/transform-remove-console/)) === -1
      ) {
        lines[
          renderIndex - 1
        ] += `${EOL} ${StaticBabelConfig.reoveConsoleTemplate()}`
        fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  babelConfigAddElementPlus() {
    const { EOL } = require('os')
    const fs = require('fs')
    let contentMain
    try {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.babelConfigInit()
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    }
    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (lines.findIndex((line) => line.match(/element-plus/)) === -1) {
        lines[
          renderIndex - 1
        ] += `${EOL}  ${StaticBabelConfig.elementPlusTemplate()}`
        fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  babelConfigAddElement() {
    const { EOL } = require('os')
    const fs = require('fs')
    let contentMain
    try {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.babelConfigInit()
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    }
    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (lines.findIndex((line) => line.match(/element-ui/)) === -1) {
        lines[
          renderIndex - 1
        ] += `${EOL}  ${StaticBabelConfig.elementTemplate()}`
        fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  babelConfigInit() {
    const { packageBabelInit } = require('./package')
    this.api.render({
      '/babel.config.js': '../module/babel.config.js'
    })
    packageBabelInit()
  }
}
/**
 * @description: 在babel里增加生产环境去掉console
 * @param {*} this.api
 * @param {*} options
 * @return {*}
 */

module.exports = BabelConfig
