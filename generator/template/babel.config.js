/*
 * @Author: your name
 * @Date: 2020-10-30 19:09:06
 * @LastEditTime: 2021-04-22 20:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wolfberry-platform/babel.config.js
 */
const plugins = [
  '@vue/babel-plugin-transform-vue-jsx',
  "transform-class-properties"
]
if (process.env.API_ENV === 'prod') {
  plugins.push('transform-remove-console')
}
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
