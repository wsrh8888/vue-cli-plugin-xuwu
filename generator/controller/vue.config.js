/*
 * @Author: your name
 * @Date: 2021-04-27 20:21:28
 * @LastEditTime: 2021-06-02 14:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/vue.config.js
 */

module.exports = (api) => {
  return {
    /**
     * @description: 在vue.config里增加适配相关代码
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    addCssOptions() {
      api.afterInvoke(() => {
        const fs = require('fs')
        const { EOL } = require('os')
        const contentVueConfig = fs.readFileSync(
          api.resolve('./vue.config.js'),
          { encoding: 'utf-8' }
        )
        const configLines = contentVueConfig.split(/\r?\n/g)
        const configIndex = configLines.findIndex((line) =>
          line.match(/module.exports/)
        )
        if (configLines.findIndex((line) => line.match(/css:/)) === -1) {
          configLines[configIndex] += `${EOL}  css: {
            loaderOptions: {
              postcss: {
                plugins: [
                  require('postcss-plugin-px2rem')({
                    rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                    // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                    //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                    // propBlackList: [], //黑名单
                    exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                    // selectorBlackList: [], //要忽略并保留为px的选择器
                    // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                    // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                    mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                    minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    selectorBlackList: ['van-']
                  })
                ]
              }
            }
          },`
          fs.writeFileSync('./vue.config.js', configLines.join(EOL), {
            encoding: 'utf-8'
          })
        }
      })
    },
    vueConfigFlexible() {
      const fs = require('fs')
      try {
        fs.readFileSync(api.resolve('./module/vue.config.js'), {
          encoding: 'utf-8'
        })
      } catch (error) {
        api.render({
          '/vue.config.js': './module/vue.config.js'
        })
      }
      api.render({
        '/src/utils/rem.js': './module/rem.js'
      })
    }
  }
}
