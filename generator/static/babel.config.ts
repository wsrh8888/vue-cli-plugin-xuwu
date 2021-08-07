/*
 * @Author: your name
 * @Date: 2021-06-01 11:34:28
 * @LastEditTime: 2021-08-07 15:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/view/babel.config.js
 */

export default class BabelConfig {
  static reoveConsoleTemplate() {
    return `
      if (process.env.API_ENV === 'prod') {
        plugins.push('transform-remove-console')
      }
    `
  }
  /**
   * @description: element按需引入模板
   * @param {*}
   * @return {*}
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
