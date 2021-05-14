/*
 * @Author: your name
 * @Date: 2021-05-14 21:04:26
 * @LastEditTime: 2021-05-14 21:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/module/config/index.ts
 */
/*
 * @Author: your name
 * @Date: 2021-05-10 19:44:24
 * @LastEditTime: 2021-05-10 20:09:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /task-system/src/utils/config.ts
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
