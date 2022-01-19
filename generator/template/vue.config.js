const process = require('process')
const webpack = require('webpack')

let webUrl = ''
if (process.env.NODE_ENV === 'production' && process.env.API_ENV === 'test') {
  webUrl = '/'
} else if (
  process.env.NODE_ENV === 'production' &&
  process.env.API_ENV === 'prod'
) {
  webUrl = '/'
} else if (
  process.env.NODE_ENV === 'production' &&
  process.env.API_ENV === 'pre'
) {
  webUrl = '/'
} else {
  webUrl = '/'
}

/**
 * @description: vue-cli相关配置，具体配置的含义翻阅文档
 * @param 文档地址{https://cli.vuejs.org/zh/config/#pages}
 * @return {*}
 */
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_ENV: JSON.stringify(process.env.API_ENV)
        }
      })
    ]
  },
  productionSourceMap:
    process.env.NODE_ENV === 'production' && process.env.API_ENV === 'test',
  //lintOnSave 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  //lintOnSave 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  lintOnSave: 'warning',
  transpileDependencies: [], //用来对node_modules中某个依赖包的es6语法转为es5
  publicPath: webUrl,
  assetsDir: './static'
}
