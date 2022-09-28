const Xuwu = require('../utils/xuwu')

class Package {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  packageAddAxios() {
    this.api.extendPackage({
      dependencies: {
        axios: '^0.21.1'
      }
    })
  }
  /**
   * @description: 过滤已经安装的依赖
   * @param {*} data
   * @return {*}
   */
  packageFilter(data) {
    let temp = {}
    Object.keys(data).forEach((element) => {
      if (!Xuwu.isExistPackage(element)) {
        temp = {
          ...temp,
          [element]: data[element]
        }
      }
    })
    return temp
  }
  commitHook() {
    this.api.extendPackage({
      husky: {
        hooks: {
          'pre-commit': 'lint-staged'
        }
      },
      'lint-staged': {
        '*.{js,vue,ts}': ['npm run lint', 'git add']
      },
      devDependencies: this.packageFilter({
        husky: '^4.3.7',
        'lint-staged': '^10.5.3'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加eslint格式化代码相关的依赖包和配置Vite相关
   * @param {*}
   * @return {void}
   */
  packageCommitVite() {
    this.commitHook()
    this.api.extendPackage({
      scripts: {
        lint: 'eslint --fix ./ --ext .js,.vue,.ts '
      },
      eslintConfig: {
        extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
      },
      devDependencies: this.packageFilter({
        '@vue/eslint-config-prettier': '^6.0.0',
        'eslint-plugin-html': '^5.0.0',
        'eslint-plugin-prettier': '^3.1.3',
        'eslint-plugin-vue': '^6.2.2',
        prettier: '^1.8.2',
        eslint: '^5.16.0'
      })
    })
  }
  packageCommitPreVue3() {
    this.commitHook()
    if (Xuwu.getTsOrJs() === 'ts') {
      this.api.extendPackage({
        scripts: {
          lint: 'eslint --fix . --ext .vue,.js,.ts,.jsx,.tsx'
        },
        devDependencies: this.packageFilter({
          '@typescript-eslint/eslint-plugin': '^5.6.0',
          '@typescript-eslint/parser': '^5.6.0',
          eslint: '^8.4.1',
          'eslint-config-prettier': '^8.3.0',
          'eslint-plugin-prettier': '^4.0.0',
          'eslint-plugin-vue': '^8.2.0',
          prettier: '^2.5.1'
        })
      })
    } else {
      this.api.extendPackage({
        scripts: {
          lint: 'eslint --fix . --ext .vue,.js,.ts,.jsx,.tsx'
        },
        devDependencies: this.packageFilter({
          eslint: '^8.4.1',
          'eslint-config-prettier': '^8.3.0',
          'eslint-plugin-prettier': '^4.0.0',
          'eslint-plugin-vue': '^8.2.0',
          prettier: '^2.5.1'
        })
      })
    }
  }
  /**
   * @description: 在package.json文件里，增加eslint格式化代码相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageCommitPre() {
    this.commitHook()
    this.api.extendPackage({
      scripts: {
        lint: 'vue-cli-service lint'
      },
      eslintConfig: {
        extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
      },
      devDependencies: this.packageFilter({
        '@vue/cli-plugin-eslint': '^4.5.13',
        'eslint-plugin-html': '^5.0.0',
        'babel-eslint': '^10.1.0',
        'eslint-plugin-prettier': '^3.1.3',
        '@vue/eslint-config-prettier': '^6.0.0',
        'eslint-plugin-vue': '^6.2.2',
        prettier: '^1.8.2',
        eslint: '^5.16.0'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加去掉console相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageRemoveConsole() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'babel-plugin-transform-remove-console': '^6.9.4'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加elementUI的按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageElementUi() {
    this.babelPluginComponent()
    this.api.extendPackage({
      dependencies: this.packageFilter({
        'element-ui': '^2.13.2'
      })
    })
  }
  /**
   * @description:  在package.json文件里，增加babel-plugin-component相关的依赖
   * @param {*}
   * @return {*}
   */
  babelPluginComponent() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'babel-plugin-component': '^1.1.1'
      })
    })
  }
  /**
   * @description:  在package.json文件里，增加babel-plugin-import相关的依赖
   * @param {*}
   * @return {*}
   */
  babelPluginImport() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'babel-plugin-import': '^1.13.3'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加elementPlusUi相关的按需引入的的依赖包和配置
   */
  packageElementPlusUi() {
    this.babelPluginImport()
    this.api.extendPackage({
      dependencies: {
        'element-plus': '^2.2.6'
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
      devDependencies: this.packageFilter({
        'ant-design-vue': '^2.2.5'
      })
    })
  }
  /******* 
   * @description: vite中按需引入库
   */  
  packageUnpluginElementPlus() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'unplugin-element-plus': '^0.4.1'
      })
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
      devDependencies: this.packageFilter({
        'ant-design-vue': '^1.7.7'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加vantUi和按需引入相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageVantUi() {
    if (Xuwu.getBuildToolName() !== 'vite') {
      this.babelPluginImport()
    }
    this.api.extendPackage({
      dependencies: {
        vant: '^2.12.19'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加vantUi3相关的依赖包和配置
   */
  packageVue3Vite() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'vite-plugin-style-import': '^1.4.0'
        // "vite-plugin-components": "^0.13.3",
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加vantUi3相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageVantVue3() {
    if (Xuwu.getBuildToolName() !== 'vite') {
      this.babelPluginImport()
    }
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        vant: '^3.3.6'
      })
    })
  }
  /*******
   * @description: svg依赖包
   * @return {*}
   */
  packageSvgLoader() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'vite-svg-loader': '^3.4.0'
      })
    })
  }
  /**
   * @description: 在package.json文件里 增加Es6转为Es5相关依赖包
   * @param {*}
   * @return {void}
   */
  packageBabelEs6ToEs5() {
    this.api.extendPackage({
      browserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'ios >= 11',
        'safari >= 11'
      ],
      devDependencies: this.packageFilter({
        '@babel/preset-env': '^7.8.3',
        '@vue/cli-plugin-babel': '~4.5.0',
        'babel-plugin-transform-class-properties': '^6.24.1'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加console控制台面板初始化时相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageAddConsolePanel() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        vconsole: '^3.3.4'
      })
    })
  }
  packageFlexibleVite() {
    this.api.extendPackage({
      browserslist: ['last 2 versions', '> 1%', 'iOS 7', 'last 3 iOS versions'],
      devDependencies: this.packageFilter({
        autoprefixer: '^10.4.0',
        'lib-flexible': '^0.3.2',
        'postcss-plugin-px2rem': '^0.8.1'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加移动端适配相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageFlexible() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'lib-flexible': '^0.3.2',
        'postcss-plugin-px2rem': '^0.8.1'
      })
    })
  }
  packageCrossEnvCommon() {
    this.api.extendPackage({
      'scripts-info': {
        serve_test: '启动开发/测试环境',
        build_test: '打包测试环境',
        build: '分析打包后包含的模块的大小'
      }
    })
  }
  packageUniappWebpack() {
    this.packageCrossEnvCommon()
    this.api.extendPackage({
      scripts: {
        serve_test: 'cross-env API_ENV=test npm run dev:h5',
        serve_pre: 'cross-env API_ENV=pre npm run dev:h5',
        serve_prod: 'cross-env API_ENV=prod npm run dev:h5',
        build_test: 'cross-env API_ENV=test npm run build:h5',
        build_pre: 'cross-env API_ENV=pre npm run build:h5',
        build_prod: 'cross-env API_ENV=prod npm run build:h5'
      },
      devDependencies: this.packageFilter({
        'cross-env': '^7.0.3'
      })
    })
  }
  packageCrossEnvUniappVite() {
    this.packageCrossEnvCommon()
    this.api.extendPackage({
      scripts: {
        serve_test: 'npm run dev:h5 --mode=test',
        serve_pre: 'npm run dev:h5 --mode=pre',
        serve_prod: 'npm run dev:h5 --mode=prod',
        build_test: 'build:h5 build --mode=test',
        build_pre: 'build:h5 build --mode=pre',
        build_prod: 'build:h5 build --mode=prod'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加Vite环境区分变量和命令相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageCrossEnvVite() {
    this.packageCrossEnvCommon()
    this.api.extendPackage({
      scripts: {
        serve_test: 'vite serve --mode=test',
        serve_pre: 'vite serve --mode=pre',
        serve_prod: 'vite serve --mode=prod',
        build_test: 'vite build --mode=test',
        build_pre: 'vite build --mode=pre',
        build_prod: 'vite build --mode=prod'
      }
    })
  }
  /**
   * @description: 在package.json文件里，增加环境区分变量和命令相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageCrossEnv() {
    this.packageCrossEnvCommon()
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
      devDependencies: this.packageFilter({
        'cross-env': '^7.0.3'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加sass相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageSass() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        'sass-loader': '^10.2.0',
        sass: '^1.32.13'
      })
    })
  }
  /**
   * @description: 在package.json文件里，增加less相关的依赖包和配置
   * @param {*}
   * @return {void}
   */
  packageLess() {
    this.api.extendPackage({
      devDependencies: this.packageFilter({
        less: '^3.12.0',
        'less-loader': '^6.2.0'
      })
    })
  }
}

module.exports = Package
