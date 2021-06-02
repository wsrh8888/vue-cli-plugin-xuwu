/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:33
 * @LastEditTime: 2021-06-02 14:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/main.js
 */
module.exports = (api) => {
  return {
    /**
     * @description: 在main里增加适配相关代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    addFlexibleOptions() {
      api.injectImports(api.entryFile, 'import "lib-flexible/flexible"')
      api.afterInvoke(() => {
        const fs = require('fs')
        const { EOL } = require('os')
        const contentVueConfig = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const configLines = contentVueConfig.split(/\r?\n/g)
        const configIndex = configLines.findIndex((line) =>
          line.match(/lib-flexible/)
        )
        if (configLines.findIndex((line) => line.match(/rem.js/)) === -1) {
          configLines[configIndex] += `${EOL} import './utils/rem.js'`
          fs.writeFileSync(api.entryFile, configLines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    /**
     * @description: 在main里增加console相关配置代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    addConsoleOption() {
      api.injectImports(api.entryFile, 'import VConsole from "vconsole"')
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
          encoding: 'utf-8'
        })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex((line) => line.match(/vconsole/))
        if (lines.findIndex((line) => line.match(/new VConsole()/)) === -1) {
          lines[renderIndex] += `${EOL} if (process.env.API_ENV !== 'prod') { 
            // @ts-ignore
            Vue.use(new VConsole())
          }`
          fs.writeFileSync(api.entryFile, lines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    /**
     * @description: 在main文件中增加导入plugins入口
     * @param {*}
     * @return {*}
     */
    mainAddPlugins() {
      api.injectImports(api.entryFile, 'import "./plugins";')
    }
  }
}
