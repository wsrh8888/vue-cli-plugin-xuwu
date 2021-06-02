/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-02 10:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api, options) => {
  return {
    requestPlatforms() {
      api.extendPackage({
        dependencies: {
          'axios': '^0.21.1'
        }
      })
      api.render({
        "/src/utils/request.ts":"../../module/request/webTs/request.ts",
        "/src/api/index.ts": "../../module/request/webTs/index.ts",
      })
    },
    configPlatforms() {
      api.render({
        "/src/utils/config.ts":"../../module/config/index.ts"
      })
    },
    elementUiPlatforms() {
      api.render({
        "/src/plugins/element.ts":"../../module/plugins/element.ts"
      })
      api.injectImports("/src/plugins/index.ts", `import './element.ts'`)

    },
     /**
     * @description: 判断在plugins下面是否有index文件，如果没有则创建
     * @param {*}
     * @return {*}
     */    
      pluginsPlatforms() {
        const fs = require('fs')
        try {
        fs.readFileSync(api.resolve(`./src/plugins/index.js`), { encoding: 'utf-8' })
       } catch (error) {
        api.render({
          "/src/plugins/index.js":"../../module/plugins/index.js",
        })
       }
  
      }
  }
}