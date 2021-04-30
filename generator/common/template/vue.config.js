/*
 * @Author: your name
 * @Date: 2021-04-22 17:17:59
 * @LastEditTime: 2021-04-29 17:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/vue.config.js
 */
const process = require('process')
const webpack = require('webpack')

let webUrl = ''
if (process.env.NODE_ENV === 'production' && process.env.API_ENV === 'test') {
  webUrl = '/'
} else if (process.env.NODE_ENV === 'production' &&process.env.API_ENV === 'prod') {
  webUrl = '/'
} else if (process.env.NODE_ENV === 'production' &&process.env.API_ENV === 'pre') {
  webUrl = '/'
} else {
  webUrl = '/'
}
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_ENV: JSON.stringify(process.env.API_ENV)
        }
      }),
    ],
  },
   productionSourceMap: false,
   // eslint-loader 是否在保存的时候检查
   lintOnSave: true,
   publicPath: webUrl,
   assetsDir: './static'
}
