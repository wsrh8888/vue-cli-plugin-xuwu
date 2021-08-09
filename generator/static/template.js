/*
 * @Author: your name
 * @Date: 2021-06-01 11:34:28
 * @LastEditTime: 2021-08-09 14:42:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/view/babel.config.js
 */

module.exports = class Template {
  /**
   * @description: 字符串模板，去掉console日志
   * @param {*} 无
   * @return {string}
   */
  static reoveConsoleTemplate() {
    return `
      if (process.env.API_ENV === 'prod') {
        plugins.push('transform-remove-console')
      }
    `
  }
  /**
   * @description: 字符串模板，element按需引入
   * @param {*} 无
   * @return {string}
   */
  static elementTemplate() {
    return `
      plugins.push([
        'component',
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        },
      ])
    `
  }
  /**
   * @description: 字符串模板，elementPlus按需引入
   * @param {*} 无
   * @return {string}
   */
  static elementPlusTemplate() {
    return `
      plugins.push([
        "import",
        {
          libraryName: "element-plus",
          customStyleName: (name) => {
            return "element-plus/lib/theme-chalk/"+name+".css";
          },
        },
      ])
    `
  }
  /**
   * @description: 字符串模板，vant按需引入
   * @param {*}
   * @return {string}
   */
  static vantTemplate() {
    return `
      plugins.push([
        "import", {
          "libraryName": "vant",
          "libraryDirectory": "es",
          "style": true
        }
      ])
    `
  }
  /**
   * @description: 字符串模板，antDesign按需引入
   * @param {*}
   * @return {string}
   */
  static antDesignTemplate() {
    return `
      [
        'import',
        { 
          libraryName: 'ant-design-vue', 
          libraryDirectory: 'es', 
          style: true 
        }
      ]
    `
  }
  /**
   * @description: 字符串模板，px转为rem，在generator/common/vue.config.js文件中使用
   * @param {*}
   * @return {string}
   */
  static px2remTemplate() {
    return `
      css: {
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
  }
}
