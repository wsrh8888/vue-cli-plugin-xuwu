const Xuwu = require('../../utils/xuwu')
const Fs = require('fs')
const astViteParse = require('../../ast/vite.config')

/**
 * @description: 在vue.config里增加适配相关代码
 * @param {*}
 * @return {void}
 */
class ViteConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  fileInit() {
    try {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/export default/)) === -1) {
        throw Error
      }
      // 判断vite.config.js 中是否是 =>的写法
      if (!astViteParse.astViteConfigIsInit(contentMain)) {
        throw Error
      }
    } catch (error) {
      this.api.render({
        [`/vite.config.${Xuwu.getTsOrJs()}`]: `../../template/${Xuwu.getBuildToolName()}.config.${Xuwu.getTsOrJs()}`
      })
    }
  }
  fileInitReact() {
    this.fileInit()
    this.viteConfigCommonReact()
  }
  fileInitVue() {
    this.fileInit()
    this.viteConfigCommonVue()
  }
  fileInitWeb() {
    if (Xuwu.getVueVersion() === 'react') {
      this.fileInitReact()
    } else {
      this.fileInitVue()
    }
  }
  /**
   * @description: 初始化uniapp的vite
   */
  fileInitUniapp() {
    this.fileInit()
    this.viteConfigCommonVitePluginUni()
  }
  getViteFileName() {
    console.log(Xuwu.getTsOrJs(), Xuwu.single.api._entryFile, '!!!!')
    return `./vite.config.${Xuwu.getTsOrJs()}`
  }
  writeViteConfigContent(code) {
    Fs.writeFileSync(this.getViteFileName(), code, {
      encoding: 'utf-8'
    })
  }
  getViteConfigContent() {
    return Fs.readFileSync(this.api.resolve(this.getViteFileName()), {
      encoding: 'utf-8'
    })
  }
  viteConfigCommonRemoveConsole() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/drop_console/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigRemoveConsole(contentMain)
        )
      }
    })
  }
  viteConfigAddAliasVite4() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/alias/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddAlias(contentMain)
        )
      }
    })
  }
  viteConfigAddAliasVite3() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/alias/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astVite3ConfigAddAlias(contentMain)
        )
      }
    })
  }
  /**
   * @description: vite.config.ts 引入alias的相关代码
   */
  viteConfigAddAliasVite2() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/alias/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddAlias(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 引入按需的相关代码
   */
  viteConfigCommonElement() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/unplugin-element-plus\/vite/)) ===
        -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddElementPlus(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 增加vue()相关内容
   */
  viteConfigCommonVue() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)

      if (lines.findIndex((line) => line.match(/@vitejs\/plugin-vue/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddVue(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 增加react()相关内容
   */
  viteConfigCommonReact() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)

      if (
        lines.findIndex((line) => line.match(/@vitejs\/plugin-react/)) === -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddReact(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 增加svg laoder相关内容
   */
  viteConfigCommonSvgLoader() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/vite-svg-loader/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddSvgLoader(contentMain)
        )
      }
    })
  }
  /*******
   * @description: vite.config.ts 增加uni的插件
   */
  viteConfigCommonVitePluginUni() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/vite-plugin-uni/)) === -1) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigVitePluginUni(contentMain)
        )
      }
    })
  }
  viteConfigCommonVisualizer() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/rollup-plugin-visualizer/)) === -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigVisualizer(contentMain)
        )
      }
    })
  }
  viteConfigCommonantStyleImportant() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (
        lines.findIndex((line) => line.match(/vite-plugin-style-import/)) === -1
      ) {
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddStyleImportant(contentMain)
        )
      }
    })
  }
  viteConfigCommonAddEnv() {
    this.api.afterInvoke(() => {
      let contentMain = this.getViteConfigContent()
      let lines = contentMain.split(/\r?\n/g)
      if (lines.findIndex((line) => line.match(/baseUrl\(/)) === -1) {
        // 1、增加baseUrl方法
        // 2、在defineConfig中调用baseUrl方法
        this.writeViteConfigContent(
          astViteParse.astViteConfigAddBaseUrl(contentMain)
        )
      }
    })
  }
}

module.exports = ViteConfig
