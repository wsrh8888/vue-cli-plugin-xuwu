/*
 * @Author: your name
 * @Date: 2021-05-20 20:56:59
 * @LastEditTime: 2021-05-20 21:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/template.js
 */
module.exports = () => {
  return {
    ElementTemplate() {
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
    VantTemplate() {
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
    AntDesignTemplate(){
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