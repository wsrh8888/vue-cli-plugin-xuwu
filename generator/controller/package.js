/*
 * @Author: your name
 * @Date: 2021-04-28 18:52:01
 * @LastEditTime: 2021-08-12 15:27:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/common/package.js
 */
const Xuwu = require('../utils/xuwu')

class Package {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  /**
   * @description: 在package.json文件里，增加eslint格式化代码相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageCommitPre() {
    this.api.extendPackage({
      scripts: {
        lint: 'vue-cli-service lint'
      },
      husky: {
        hooks: {
          'pre-commit': 'lint-staged'
        }
      },
      eslintConfig: {
        extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
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
  }
  /**
   * @description: 在package.json文件里，增加去掉console相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageRemoveConsole() {
    this.api.extendPackage({
      devDependencies: {
        'babel-plugin-transform-remove-console': '^6.9.4'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加elementUI的按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageElementUi() {
    this.api.extendPackage({
      devDependencies: {
        'babel-plugin-component': '^1.1.1'
      },
      dependencies: {
        'element-ui': '^2.13.2'
      }
    })
  }
  /**
   * @description:  在package.json文件里，增加babel-plugin-import相关的依赖
   * @param {*}
   * @return {*}
   */
  babelPluginImport() {
    this.api.extendPackage({
      devDependencies: {
        'babel-plugin-import': '^1.13.3'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加elementPlusUi相关的按需引入的的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageElementPlusUi() {
    this.babelPluginImport()
    this.api.extendPackage({
      dependencies: {
        'element-plus': '^1.0.2-beta.46'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加antVue3和按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageAntDesignVue3() {
    this.babelPluginImport()
    this.api.extendPackage({
      devDependencies: {
        'ant-design-vue': '^2.2.5'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加antVue2和按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageAntDesignVue2() {
    this.babelPluginImport()
    this.api.extendPackage({
      devDependencies: {
        'ant-design-vue': '^1.7.7'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加vantUi和按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageVantUi() {
    this.babelPluginImport()
    this.api.extendPackage({
      dependencies: {
        vant: '^2.12.19'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加vantUi3相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageVantVue3() {
    this.babelPluginImport()
    this.api.extendPackage({
      devDependencies: {
        vant: '^3.0.18'
      }
    })
  }
  /**
   * @description: 在package.json文件里 增加babel.config.js初始化相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageBabelInit() {
    this.api.extendPackage({
      browserslist: ['> 1%', 'last 2 versions', 'ios >= 11', 'safari >= 11'],
      devDependencies: {
        '@babel/preset-env': '^7.8.3',
        'babel-plugin-transform-class-properties': '^6.24.1'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加console控制台面板初始化时相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageAddConsolePanel() {
    this.api.extendPackage({
      devDependencies: {
        vconsole: '^3.3.4'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加移动端适配相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageFlexible() {
    this.api.extendPackage({
      devDependencies: {
        'lib-flexible': '^0.3.2',
        'postcss-plugin-px2rem': '^0.8.1'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加环境区分变量和命令相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageCrossEnv() {
    this.api.extendPackage({
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
  }
  /**
   * @description: 在package.json文件里，增加sass相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageSass() {
    this.api.extendPackage({
      devDependencies: {
        'sass-loader': '^10.2.0',
        sass: '^1.32.13'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加less相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageLess() {
    this.api.extendPackage({
      devDependencies: {
        less: '^3.12.0',
        'less-loader': '^6.2.0'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加拖拽组建相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageVuedraggable() {
    this.api.extendPackage({
      devDependencies: {
        vuedraggable: '^2.24.3'
      }
    })
  }
}

module.exports = Package
