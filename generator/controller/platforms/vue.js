/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-09 11:30:09
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
        '/src/utils/request.js': '../../module/request/webJs/request.js',
        '/src/api/index.js': '../../module/request/webJs/index.js'
      })
    },
    configPlatforms() {
      api.render({
        '/src/utils/config.js': '../../module/config/index.js'
      })
    },
    vantUiPlatforms() {
      api.render({
        '/src/plugins/vant.js': '../../module/plugins/vant.js'
      })
      api.injectImports('/src/plugins/index.js', 'import "./vant.js"')
    },
    elementUiPlatforms() {
      api.render({
        '/src/plugins/element.js': '../../module/plugins/element.js'
      })
    },
    /**
     * @description: 判断在plugins下面是否有index文件，如果没有则创建
     * @param {*}
     * @return {*}
     */
    pluginsPlatforms() {
      const fs = require('fs')
      try {
        fs.readFileSync(api.resolve('./src/plugins/index.js'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        api.render({
          '/src/plugins/index.js': '../../module/plugins/index.js'
        })
      }
    },
    flexiblePlatforms() {
      api.render({
        '/src/plugins/rem.js': '../../module/plugins/rem.js'
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
