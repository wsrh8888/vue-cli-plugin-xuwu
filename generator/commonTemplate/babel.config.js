/*
 * @Author: your name
 * @Date: 2020-10-30 19:09:06
 * @LastEditTime: 2021-04-29 20:32:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wolfberry-platform/babel.config.js
 */
const plugins = [
  '@vue/babel-plugin-transform-vue-jsx',
  "transform-class-properties"
]
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ]
  ],
  plugins
}
