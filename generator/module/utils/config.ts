/*
 * @Author: your name
 * @Date: 2021-05-14 21:04:26
 * @LastEditTime: 2021-06-02 14:24:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/module/utils/index.ts
 */
let test: string

if (process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test') {
  test = '222'
} else if (process.env.API_ENV === 'pre-releases') {
  test = '222'
} else if (process.env.API_ENV === 'production') {
  test = '222'
}
export { test }
