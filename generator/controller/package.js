/*
 * @Author: your name
 * @Date: 2021-04-28 18:52:01
 * @LastEditTime: 2021-05-14 20:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/common/package.js
 */
module.exports = (api, options) => {
  return {
    /**
     * @description: 在package里增加代码格式化插件  
     * @param {*} api
     * @param {*} options
     * @return {*}
     */
    packageCommitPre() {
      api.extendPackage({
        husky: {
          "hooks": {
            "pre-commit": "lint-staged"
          }
        },
        eslintConfig: {
          extends: [
            "plugin:vue/essential",
            "eslint:recommended",
            "@vue/prettier",
          ]
        },
        "lint-staged": {
          "*.{js,vue,ts}": [
            "vue-cli-service lint",
            "git add"
          ]
        },
        devDependencies: {
          "babel-eslint": "^10.1.0",
          "eslint-plugin-prettier": "^3.1.3",
          'husky': '^4.3.7',
          "@vue/eslint-config-prettier": "^6.0.0",
          "eslint-plugin-vue": "^6.2.2",
          "prettier": "^2.2.1",
          'lint-staged': '^10.5.3'
        },
      })
    },
    /**
     * @description: 生产环境package里增加去掉console的依赖包
     * @param {*}
     * @return {*}
     */  
    packageRemoveConsole() {
      api.extendPackage({
        devDependencies: {
          "babel-plugin-transform-remove-console": "^6.9.4"
        },
      })
    }
  }
}