/*
 * @Author: your name
 * @Date: 2021-06-01 11:34:28
 * @LastEditTime: 2021-08-08 18:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/view/babel.config.js
 */

module.exports = class BabelConfig {
  /**
   * @description: 模板文字，在babel.config.js中配置删除console日志信息
   * @param {*} 无
   * @return {*} string
   */
  static reoveConsoleTemplate() {
    return `
      if (process.env.API_ENV === 'prod') {
        plugins.push('transform-remove-console')
      }
    `
  }
  /**
   * @description: 模板文字，在babel.config.js中配置element按需引入模板
   * @param {*} 无
   * @return {*} string
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
   * @description: 模板文字，在babel.config.js中配置elementPlugins按需引入模板
   * @param {*} 无
   * @return {*} string
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
   * @description: 模板文字，在babel.config.js中配置vant的按需引入
   * @param {*} 无
   * @return {*} string
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
   * @description: 模板文字，在babel.config.js中配置ant-design的按需引入
   * @param {*} 无
   * @return {*} string
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
}
