const Template = require('../static/template')
const Xuwu = require('../utils/xuwu')
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
   * @description: babelConfig.js文件AntDesign按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddAntDesign() {
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
      if (lines.findIndex((line) => line.match(/ant-design-vue/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.antDesignTemplate()}`
        Fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  /**
   * @description: babelConfig.js文件VantVue2按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddVant() {
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
      if (lines.findIndex((line) => line.match(/vant/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.vantTemplate()}`
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
  }
  /**
   * @description: babelConfig.js配置Es6转为es5
   * @param {*}
   * @return {*}
   */
  babelConfigEs6ToEs5() {
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
        lines.findIndex((line) => line.match(/transform-class-properties/)) ===
        -1
      ) {
        lines[renderIndex - 1] += `${EOL}  ${Template.es6ToEs5Template()}`
        Fs.writeFileSync('./babel.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = BabelConfig
