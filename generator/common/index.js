/*
 * @Author: your name
 * @Date: 2021-04-26 19:18:55
 * @LastEditTime: 2021-04-26 19:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/console.js
 */
module.exports = api => {
  return {
    consolePlugin() {
      api.extendPackage({
        devDependencies: {
          "vconsole": "^3.3.4",
        }
      })
      api.injectImports(api.entryFile, `import VConsole from 'vconsole'`)
      api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
        const lines = contentMain.split(/\r?\n/g)
        const renderIndex = lines.findIndex(line => line.match(/vconsole/))
        console.log(lines.findIndex(line => line.match(/new VConsole()/)), '3333333')
        if (lines.findIndex(line => line.match(/new VConsole()/)) === -1) {
          lines[renderIndex] += `${EOL} if (process.env.NODE_ENV !== 'prod') { 
            // @ts-ignore
            Vue.use(new VConsole())
          }`
          fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
    }
  }
}
