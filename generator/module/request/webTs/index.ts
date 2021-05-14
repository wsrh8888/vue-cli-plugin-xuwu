/*
 * @Author: your name
 * @Date: 2021-04-22 18:09:26
 * @LastEditTime: 2021-05-14 20:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/api/common.js
 */
import {request} from '@/utils/request'

export const testApi = () => {
  return request({
    method: 'get',
    url: `test`
  })
}