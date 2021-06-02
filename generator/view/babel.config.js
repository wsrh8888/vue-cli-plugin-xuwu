/*
 * @Author: your name
 * @Date: 2021-06-01 11:34:28
 * @LastEditTime: 2021-06-01 11:39:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/view/babel.config.js
 */
module.exports = () => {
  return {
    reoveConsoleTemplate() {
      return `
        if (process.env.API_ENV === 'prod') {
          plugins.push('transform-remove-console')
        }
      `
    },
    /**
     * @description: element按需引入模板
     * @param {*}
     * @return {*}
     */
    elementTemplate() {
      return `
        plugins.push([
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          },
        ])
      `
    },
    vantTemplate() {
      return `
        plugins.push([
          "import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
          }
        ])
      `
    },
    antDesignTemplate() {
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
}
