/*
 * @Author: your name
 * @Date: 2021-04-22 17:56:39
 * @LastEditTime: 2021-04-29 17:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/utils/config.js
 */
let test = ''

if (process.env.API_ENV === 'prod') {
  test = ''
} else if (process.env.API_ENV === 'test' || process.env.API_ENV === 'dev') {
  test = ''
} else if (process.env.API_ENV === 'pre') {
  test = ''
}
export { test}
