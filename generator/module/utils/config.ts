/*
 * @Author: your name
 * @Date: 2021-05-14 21:04:26
 * @LastEditTime: 2021-06-10 14:34:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/module/utils/index.ts
 */
let test: string

if (process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test') {
  test = '222'
} else if (process.env.API_ENV === 'pre') {
  test = '222'
} else if (process.env.API_ENV === 'production') {
  test = '222'
}
export { test }
