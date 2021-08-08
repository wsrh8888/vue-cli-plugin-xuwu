/*
 * @Author: your name
 * @Date: 2021-06-01 11:34:28
 * @LastEditTime: 2021-08-08 18:43:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/view/babel.config.js
 */

module.exports = class BabelConfig {
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
}
