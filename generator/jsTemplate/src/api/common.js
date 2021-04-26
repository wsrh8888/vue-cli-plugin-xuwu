/*
 * @Author: your name
 * @Date: 2021-04-22 18:09:26
 * @LastEditTime: 2021-04-26 19:34:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/api/common.js
 */
import { test } from '@/utils/config'
import ajax from '@/utils/ajax'
let axiosUrl = `${test}`

export const testApi = () => {
  return ajax({
    method: 'get',
    url: `${axiosUrl}/test`
  })
}