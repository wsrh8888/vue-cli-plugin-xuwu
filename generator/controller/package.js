/*
 * @Author: your name
 * @Date: 2021-04-28 18:52:01
 * @LastEditTime: 2021-06-10 11:31:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/common/package.js
 */
module.exports = (api) => {
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
          lint: 'vue-cli-service lint'
        },
        husky: {
          hooks: {
            'pre-commit': 'lint-staged'
          }
        },
        eslintConfig: {
          extends: [
            'plugin:vue/essential',
            'eslint:recommended',
            '@vue/prettier'
          ]
        },
        'lint-staged': {
          '*.{js,vue,ts}': ['vue-cli-service lint', 'git add']
        },
        devDependencies: {
          '@vue/cli-plugin-eslint': '^4.5.13',
          'eslint-plugin-html': '^5.0.0',
          'babel-eslint': '^10.1.0',
          'eslint-plugin-prettier': '^3.1.3',
          husky: '^4.3.7',
          '@vue/eslint-config-prettier': '^6.0.0',
          'eslint-plugin-vue': '^6.2.2',
          prettier: '^1.8.2',
          'lint-staged': '^10.5.3',
          eslint: '^5.16.0'
        }
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
          'babel-plugin-transform-remove-console': '^6.9.4'
        }
      })
    },
    /**
     * @description: 引入element
     * @param {*}
     * @return {*}
     */
    packageElementUi() {
      api.extendPackage({
        devDependencies: {
          'babel-plugin-component': '^1.1.1'
        },
        dependencies: {
          'element-ui': '^2.13.2'
        }
      })
    },
    /**
     * @description: 引入elementPlus
     * @param {*}
     * @return {*}
     */
    packageElementPlusUi() {
      api.extendPackage({
        devDependencies: {
          'babel-plugin-import': '^1.13.3'
        },
        dependencies: {
          'element-plus': '^1.0.2-beta.46'
        }
      })
    },
    /**
     * @description: 引入vant
     * @param {*}
     * @return {*}
     */
    packageVantUi() {
      api.extendPackage({
        dependencies: {
          vant: '^2.12.19'
        }
      })
    },
    /**
     * @description: babel.config.js文件初始化时候需要的配置
     * @param {*}
     * @return {*}
     */
    packageBabelInit() {
      api.extendPackage({
        browserslist: ['> 1%', 'last 2 versions', 'ios >= 11', 'safari >= 11'],
        devDependencies: {
          '@babel/preset-env': '^7.8.3',
          'babel-plugin-transform-class-properties': '^6.24.1'
        }
      })
    },
    /**
     * @description: 增加console控制台面板
     * @param {*}
     * @return {*}
     */
    packageAddConsolePanel() {
      api.extendPackage({
        devDependencies: {
          vconsole: '^3.3.4'
        }
      })
    },
    /**
     * @description: 添加移动端适配相关插件
     * @param {*}
     * @return {*}
     */
    packageFlexible() {
      api.extendPackage({
        devDependencies: {
          'lib-flexible': '^0.3.2',
          'postcss-plugin-px2rem': '^0.8.1'
        }
      })
    },
    /**
     * @description: scripts增加环境区分的命令
     * @param {*}
     * @return {*}
     */
    packageCrossEnv() {
      api.extendPackage({
        scripts: {
          serve_test: 'cross-env API_ENV=test vue-cli-service serve',
          serve_pre: 'cross-env API_ENV=pre vue-cli-service serve',
          serve_prod: 'cross-env API_ENV=prod vue-cli-service serve',
          build_test: 'cross-env API_ENV=test vue-cli-service build',
          build_pre: 'cross-env API_ENV=pre vue-cli-service build',
          build_prod: 'cross-env API_ENV=prod vue-cli-service build',
          build: 'cross-env API_ENV=prod vue-cli-service build --report'
        },
        'scripts-info': {
          serve_test: '启动开发/测试环境',
          build_test: '打包测试环境',
          build: '分析打包后包含的模块的大小'
        },
        browserslist: ['> 1%', 'last 2 versions', 'ios >= 11', 'safari >= 11'],
        devDependencies: {
          'cross-env': '^7.0.3'
        }
      })
    },
    /**
     * @description: 增加sass相关依赖
     * @param {*}
     * @return {*}
     */
    packageSass() {
      api.extendPackage({
        devDependencies: {
          'sass-loader': '^10.2.0',
          sass: '^1.32.13'
        }
      })
    },
    /**
     * @description: 增加less相关依赖
     * @param {*}
     * @return {*}
     */
    packageLess() {
      api.extendPackage({
        devDependencies: {
          less: '^3.12.0',
          'less-loader': '^6.2.0'
        }
      })
    },
    /**
     * @description: 增加拖拽组建相关依赖
     * @param {*}
     * @return {*}
     */
    packageVuedraggable() {
      api.extendPackage({
        devDependencies: {
          vuedraggable: '^2.24.3'
        }
      })
    },
    packageVantVue3() {
      api.extendPackage({
        devDependencies: {
          vant: '^3.0.18'
        }
      })
    }
  }
}
