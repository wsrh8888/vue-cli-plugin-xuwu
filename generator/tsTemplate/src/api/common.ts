/*
 * @Author: your name
 * @Date: 2021-04-22 18:09:26
 * @LastEditTime: 2021-04-26 16:29:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/api/common.js
 */
import { test } from '@/utils/config'
import ajax from '@/utils/serve'
let axiosUrl = `${test}`

export const testApi = () => {
  return ajax({
    method: 'get',
    url: `${axiosUrl}/test`
  })
}