/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-09 11:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    requestPlatforms() {
      api.extendPackage({
        dependencies: {
          axios: '^0.21.1'
        }
      })
      api.render({
        '/src/utils/request.ts': '../../module/request/webTs/request.ts',
        '/src/api/index.ts': '../../module/request/webTs/index.ts'
      })
    },
    configPlatforms() {
      api.render({
        '/src/utils/config.ts': '../../module/config/index.ts'
      })
    },
    elementUiPlatforms() {
      api.render({
        '/src/plugins/element.ts': '../../module/plugins/element.ts'
      })
    },
    vantUiPlatforms() {
      api.render({
        '/src/plugins/vant.ts': '../../module/plugins/vant.ts'
      })
      api.injectImports('/src/plugins/index.ts', 'import "./vant.ts"')
    },
    /**
     * @description: 判断在plugins下面是否有index文件，如果没有则创建
     * @param {*}
     * @return {*}
     */
    pluginsPlatforms() {
      const fs = require('fs')
      try {
        fs.readFileSync(api.resolve('./src/plugins/index.ts'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        api.render({
          '/src/plugins/index.ts': '../../module/plugins/index.ts'
        })
      }
    },
    flexiblePlatforms() {
      api.render({
        '/src/plugins/rem.ts': '../../module/plugins/rem.ts'
      })
      api.injectImports(
        '/src/plugins/index.ts',
        'import "lib-flexible/flexible"'
      )
      api.injectImports('/src/plugins/index.ts', 'import "./rem"')
    },
    elementPlusUiPlatforms() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/elementPlus.js'
      })
    }
  }
}
