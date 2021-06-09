/*
 * @Author: your name
 * @Date: 2021-04-22 18:09:26
 * @LastEditTime: 2021-06-09 11:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/api/common.js
 */
import { request } from '@/utils/request'
import { test } from '@/utils/config'
export const testApi = () => {
  return request({
    method: 'get',
    url: `${test}/test`
  })
}
