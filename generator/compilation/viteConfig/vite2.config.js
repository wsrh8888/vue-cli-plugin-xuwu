const Template = require('../../static/template')
const { EOL } = require('os')
const ViteConfig = require('./vite.config')
class Vite2Config extends ViteConfig {
  fileInitWebVite2() {
    this.fileInitWeb()
    this.viteConfigAddAliasVite2()
  }
  fileInitUniappVite2() {
    this.fileInitUniapp()
    this.viteConfigAddAliasVite2()
  }
  /*******
   * @description: 增加环境变量的基础配置
   */
  addEnvConfigUniapp() {
    this.fileInitUniappVite2()
    this.viteConfigCommonAddEnv()
  }
  /*******
   * @description: 增加环境变量的基础配置
   */
  addEnvConfig() {
    this.fileInitWebVite2()
    this.viteConfigCommonAddEnv()
  }
  viteConfigAddAntDesign() {
    this.fileInitWebVite2()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigRemoveConsole() {
    this.fileInitWebVite2()
    this.viteConfigCommonRemoveConsole()
  }
  viteConfigVisualizer() {
    this.fileInitWebVite2()
    this.viteConfigCommonVisualizer()
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigAddElement() {
    this.fileInitWebVite2()
    this.viteConfigCommonElement()
  }
  viteConfigLess() {
    this.fileInitWebVite2()
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex((line) =>
        line.match(/export default defineConfig\(\(\{/)
      )
      if (lines.findIndex((line) => line.match(/less/)) === -1) {
        lines[renderIndex] += `${EOL} ${Template.viteLess()},`
        this.writeViteConfigContent(lines.join(EOL))
      }
    })
  }
  viteConfigAddVant() {
    this.fileInitWebVite2()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigSvgLoader() {
    this.fileInitWebVite2()
    this.viteConfigCommonSvgLoader()
  }
}
module.exports = Vite2Config
