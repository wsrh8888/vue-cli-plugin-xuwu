module.exports = class Template {
  /**
   * @description: 字符串模板，去掉console日志
   * @param {*} 无
   * @return {string}
   */
  static reoveConsoleTemplate() {
    return `
      if (process.env.API_ENV === 'prod') {
        plugins.push('transform-remove-console')
      }
    `
  }
  /**
   * @description: 字符串模板，element按需引入
   * @param {*} 无
   * @return {string}
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
  /**
   * @description: 字符串模板，elementPlus按需引入
   * @param {*} 无
   * @return {string}
   */
  static elementPlusTemplate() {
    return `
    plugins.push([
      'import',
      {
        libraryName: 'element-plus',
        customName: (name) => {
          name = name.slice(3)
          return "element-plus/es/components/" + name
        },
        customStyleName: (name) => {
          name = name.slice(3)
          return "element-plus/es/components/" + name + "/style/css"
        }
      }
    ])
    `
  }
  /**
   * @description: 字符串模板，vant按需引入
   * @param {*}
   * @return {string}
   */
  static vantTemplate() {
    return `
      plugins.push([
        "import", {
          "libraryName": "vant",
          "libraryDirectory": "lib",
          "style": true
        }
      ])
    `
  }
  /**
   * @description: 字符串模板，antDesign按需引入
   * @param {*}
   * @return {string}
   */
  static antDesignTemplate() {
    return `
      plugins.push([
        'import',
        { 
          libraryName: 'ant-design-vue', 
          libraryDirectory: 'es', 
          style: 'css' 
        }
      ])
    `
  }
  /**
   * @description: 字符串模板，px转为rem，在generator/common/vue.config.js文件中使用
   * @param {*}
   * @return {string}
   */
  static px2remTemplate() {
    return `
      css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
              // unitPrecision: 5, //允许REM单位增长到的十进制数字。
              //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
              // propBlackList: [], //黑名单
              exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
              // selectorBlackList: [], //要忽略并保留为px的选择器
              // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
              // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
              mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
              minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
              selectorBlackList: ['van-']
            })
          ]
        }
      }
    },`
  }
  /**
   * @description: 字符串模板，在main.vue文件中增加适配css，在generator/common/main.vue.js文件中使用
   * @param {*}
   * @return {string}
   */
  static mainVueTemplate() {
    return `
      @media only screen and (min-width: 375px) {
        #app {
          width: 375px;
          height: 100%;
          margin: 0 auto;
        }
      }
    `
  }
  /**
   * @description: 字符串模板，在main.vue文件中增加Vconsole相关配置，在generator/common/main.js文件中使用
   * @param {*}
   * @return {string}
   */
  static vConsoleVue2() {
    return `
      import VConsole from 'vconsole'
      if (process.env.API_ENV !== 'prod') { 
        // @ts-ignore
        Vue.use(new VConsole())
      }
    `
  }
  /**
   * @description: 字符串模板，在main.vue文件中增加Vconsole相关配置，在generator/common/main.js文件中使用
   * @param {*}
   * @return {string}
   */
  static vConsoleVue3() {
    return `
      import VConsole from 'vconsole'
      app.use(new VConsole())
    `
  }
  static vConsoleVue3Vite() {
    return `
      import VConsole from 'vconsole'
      app.use(new VConsole())
    `
  }
  /**
   * @description: ES6转为es5
   * @param {*}
   * @return {*}
   */
  static es6ToEs5Template() {
    return `plugins.push(...['@vue/babel-plugin-transform-vue-jsx','transform-class-properties'])
      presets.push(['@babel/preset-env',{useBuiltIns: 'usage',corejs: 3}])`
  }
  /*******
   * @description: vite环境下去掉console
   * @param {*}
   * @return {*}
   */
  static viteDropConsole() {
    return 'minify: "terser", terserOptions: { compress: { drop_console: command === "build" && loadEnv(mode, __dirname).VITE_API_ENV === "prod", drop_debugger: command === "build" && loadEnv(mode, __dirname).VITE_API_ENV === "prod"}}'
  }
  static viteVantVue3() {
    return 'styleImport({ libs: [ { libraryName: "vant", esModule: true,  resolveStyle: (name) => `../es/${name}/style/index`,},],})'
  }
  static viteAntDeginVue3() {
    return 'styleImport({ libs: [ { libraryName: "ant-design-vue", esModule: true,  resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,},],})'
  }
  static viteElementVue3() {
    return 'styleImport({ libs: [ { libraryName: "element-plus", esModule: true,  resolveStyle: (name) => `element-plus/es/components/${name.replace("el-","")}/style/index`,},],})'
  }
  static viteLess() {
    return `css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        }
      },
    }`
  }
}
