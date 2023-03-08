const ViteConfig = require('./vite.config')
class Vite4Config extends ViteConfig {
  fileInitWebVite4() {
    this.fileInitWeb()
    this.viteConfigAddAliasVite4()
  }
  fileInitUniappVite4() {
    this.fileInitUniapp()
    this.viteConfigAddAliasVite4()
  }
  /*******
   * @description: 增加环境变量的基础配置
   */
  addEnvConfigUniapp() {
    this.fileInitUniappVite4()
    this.viteConfigCommonAddEnv()
  }
  /*******
   * @description: 增加环境变量
   */
  addEnvConfig() {
    this.fileInitWebVite4()
    this.viteConfigCommonAddEnv()
  }
  viteConfigRemoveConsole() {
    this.fileInitWebVite4()
    this.viteConfigCommonRemoveConsole()
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigAddElement() {
    this.fileInitWebVite4()
    this.viteConfigCommonElement()
  }
  viteConfigAddAntDesign() {
    this.fileInitWebVite4()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigSvgLoader() {
    this.fileInitWebVite4()
    this.viteConfigCommonSvgLoader()
  }
  viteConfigAddVant() {
    this.fileInitWebVite4()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigVisualizer() {
    this.fileInitWebVite4()
    this.viteConfigCommonVisualizer()
  }
}
module.exports = Vite4Config
