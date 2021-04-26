/*
 * @Author: your name
 * @Date: 2021-04-22 17:17:59
 * @LastEditTime: 2021-04-22 17:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/vue.config.js
 */
const process = require('process')
const webpack = require('webpack')

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
   // 基本路径
   publicPath: './',
   // 输出文件目录
   outputDir: 'dist',
   productionSourceMap: false,
   // eslint-loader 是否在保存的时候检查
   lintOnSave: true,
}
