/*
 * @Author: your name
 * @Date: 2021-04-29 20:17:38
 * @LastEditTime: 2021-08-09 15:50:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/babel.config.js
 */
const Template = require('../static/template')
const Xuwu = require('../utils/tools')
const FilePackage = require('./package')
const Fs = require('fs')
const { EOL } = require('os')
class BabelConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  filePackage = new FilePackage()

  /**
   * @description: 判断是否存在babel.config.js文件
   * @param {*}
   * @return {string}
   */
  fileIsExists() {
    let contentMain
    try {
      contentMain = Fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    } catch (error) {
      this.babelConfigInit()
      contentMain = Fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
    }
    return contentMain
  }
  /**
   * @description: babelConfig.js文件中添加去掉console相关配置
   * @param {*}
   * @return {*}
   */
  babelConfigReoveConsole() {
    let contentMain = this.fileIsExists()

    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = Fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (
        lines.findIndex((line) => line.match(/transform-remove-console/)) === -1
      ) {
        lines[renderIndex - 1] += `${EOL} ${Template.reoveConsoleTemplate()}`
        Fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: babelConfig.js文件Element按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddElementPlus() {
    let contentMain = this.fileIsExists()

    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = Fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (lines.findIndex((line) => line.match(/element-plus/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.elementPlusTemplate()}`
        Fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: babelConfig.js文件Element按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddElement() {
    let contentMain = this.fileIsExists()

    let lines = contentMain.split(/\r?\n/g)
    if (lines.findIndex((line) => line.match(/plugins/)) === -1) {
      this.babelConfigInit()
    }
    this.api.afterInvoke(() => {
      contentMain = Fs.readFileSync(this.api.resolve('./babel.config.js'), {
        encoding: 'utf-8'
      })
      lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      )
      if (lines.findIndex((line) => line.match(/element-ui/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.elementTemplate()}`
        Fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: babelConfig.js文件初始化
   * @param {*}
   * @return {void}
   */
  babelConfigInit() {
    this.api.render({
      '/babel.config.js': '../module/babel.config.js'
    })
    this.filePackage.packageBabelInit()
  }
}

module.exports = BabelConfig
