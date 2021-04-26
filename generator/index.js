/*
 * @Author: your name
 * @Date: 2021-04-22 16:33:29
 * @LastEditTime: 2021-04-26 16:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/vue-cli-plugin-init-structure/generator/index.js
 */
'use strict';


module.exports = (api) => {
  const isTs = api.entryFile.endsWith('.ts')
  api.extendPackage({
    dependencies: {
      'axios': '^0.21.1',
      "less": "^3.12.0",
      "less-loader": "^6.2.0",
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
    browserslist: [
      "> 1%",
      "last 2 versions",
      "ios >= 11",
      "safari >= 11"
    ],
    devDependencies: {
      "babel-eslint": "^10.1.0",
      "@babel/preset-env": "^7.8.3",
      "@babel/preset-env": "^7.8.3",
      "eslint-plugin-prettier": "^3.1.3",
      "babel-plugin-transform-class-properties": "^6.24.1",
      'husky': '^4.3.7',
      "@vue/eslint-config-prettier": "^6.0.0",
      "eslint-plugin-vue": "^6.2.2",
      "prettier": "^2.2.1",
      "cross-env": "^7.0.3",
      "babel-plugin-transform-remove-console": "^6.9.4",
      'lint-staged': '^10.5.3'
    },
  })
  api.render("./commonTemplate")
  if (isTs) {
    api.render("./tsTemplate")
  } else {
    api.render("./jsTemplate")
  }
  
};