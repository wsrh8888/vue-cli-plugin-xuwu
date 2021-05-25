/*
 * @Author: your name
 * @Date: 2021-04-28 18:52:01
 * @LastEditTime: 2021-05-25 10:53:10
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
        scripts: {
          "lint": "vue-cli-service lint"
        },
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
          "@vue/cli-plugin-eslint": "^4.5.13",
          "eslint-plugin-html": "^5.0.0",
          "babel-eslint": "^10.1.0",
          "eslint-plugin-prettier": "^3.1.3",
          'husky': '^4.3.7',
          "@vue/eslint-config-prettier": "^6.0.0",
          "eslint-plugin-vue": "^6.2.2",
          "prettier": "^1.8.2",
          'lint-staged': '^10.5.3',
          "eslint": "^5.16.0"
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
    },
    /**
     * @description: 增加按需引入依赖
     * @param {*}
     * @return {*}
     */    
    packageAddUiConfig() {
      api.extendPackage({
        devDependencies: {
          "babel-plugin-component": "^1.1.1",
        },
      })
    },
    // 引入element
    packageElementUi() {
      api.extendPackage({
        dependencies: {
          "element-ui": "^2.13.2"
        },
      })
    },
    // 引入vant
    packageVantUi() {
      api.extendPackage({
        dependencies: {
          "vant": "^2.12.19",
        },
      })
    },
    // 引入ant-design
    packageAntDesignUi() {
      api.extendPackage({
        dependencies: {
          "ant-design-vue": "^1.7.5",
        },
      })
    }
  }
}