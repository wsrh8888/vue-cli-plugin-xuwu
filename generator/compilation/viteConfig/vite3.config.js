const ViteConfig = require('./vite.config')
class Vite3Config extends ViteConfig {
  fileInitWebVite3() {
    this.fileInitWeb()
    this.viteConfigAddAliasVite3()
  }
  fileInitUniappVite3() {
    this.fileInit()
    this.viteConfigAddAliasVite3()
  }
  /*******
   * @description: 增加环境变量的基础配置
   */
  addEnvConfigUniapp() {
    this.fileInitUniappVite3()
    this.viteConfigCommonAddEnv()
  }
  /*******
   * @description: 增加环境变量
   */
  addEnvConfig() {
    this.fileInitWebVite3()
    this.viteConfigCommonAddEnv()
  }
  viteConfigRemoveConsole() {
    this.fileInitWebVite3()
    this.viteConfigCommonRemoveConsole()
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigAddElement() {
    this.fileInitWebVite3()
    this.viteConfigCommonElement()
  }
  viteConfigAddAntDesign() {
    this.fileInitWebVite3()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigSvgLoader() {
    this.fileInitWebVite3()
    this.viteConfigCommonSvgLoader()
  }
  viteConfigAddVant() {
    this.fileInitWebVite3()
    this.viteConfigCommonantStyleImportant()
  }
  viteConfigVisualizer() {
    this.fileInitWebVite3()
    this.viteConfigCommonVisualizer()
  }
}
module.exports = Vite3Config
