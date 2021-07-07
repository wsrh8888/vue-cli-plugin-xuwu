/*
 * @Author: your name
 * @Date: 2021-05-14 21:04:23
 * @LastEditTime: 2021-05-14 21:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/module/utils/index.js
 */
let test

if (process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test') {
  test = '222'
} else if (process.env.API_ENV === 'pre') {
  test = '222'
} else if (process.env.API_ENV === 'production') {
  test = '222'
}
export { test }
