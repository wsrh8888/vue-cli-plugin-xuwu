const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
const Fs = require('fs')
const { EOL } = require('os')

class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 判断是否存在babel.config.js文件
   * @param {*}
   * @return {string}
   */
  fileInit() {
    let contentMain
    try {
      contentMain = Fs.readFileSync(this.api.resolve('./vite.config.js'), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      console.log(lines)
      if (
        lines.findIndex((line) =>
          line.match(/export default defineConfig\(\(\{ mode, command \}\)/)
        ) === -1
      ) {
        console.log('2222')
        throw Error
      }
    } catch (error) {
      this.api.render({
        '/vite.config.js': '../module/vite.config.js'
      })
    }
  }
  /**
   * @description: viteConfig.js文件中添加去掉console相关配置
   * @param {*}
   * @return {*}
   */
  viteConfigRemoveConsole() {
    this.fileInit()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve('./vite.config.js'), {
        encoding: 'utf-8'
      })
      let lines = contentMain.split(/\r?\n/g)
      console.log(lines)
      const renderIndex = lines.findIndex((line) =>
        line.match(/export default defineConfig\(\(\{/)
      )
      if (lines.findIndex((line) => line.match(/drop_console/)) === -1) {
        console.log(renderIndex, 'renderIndex')
        lines[renderIndex] += `${EOL} build:{ ${Template.viteDropConsole()}},`
        Fs.writeFileSync('./vite.config.js', lines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
}

module.exports = ViteConfig
