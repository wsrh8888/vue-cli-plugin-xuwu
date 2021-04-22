/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-04-22 17:58:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'axios': '^0.21.1'
    },
    scripts: {
      "serve_test": "cross-env API_ENV=test vue-cli-service serve",
      "serve_pre": "cross-env API_ENV=pre vue-cli-service serve",
      "serve_prod": "cross-env API_ENV=prod vue-cli-service serve",
      "build_test": "cross-env API_ENV=test vue-cli-service build",
      "build_pre": "cross-env API_ENV=pre vue-cli-service build",
      "build_prod": "cross-env API_ENV=prod vue-cli-service build",
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
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
      ]
    },
    lintStaged: {
      "*.{js,vue,ts}": [
        "vue-cli-service lint",
        "git add"
      ]
    },
    devDependencies: {
      'husky': '^4.3.7',
      'lint-staged': '^10.5.3'
    },
  })
  api.render('./template')
};