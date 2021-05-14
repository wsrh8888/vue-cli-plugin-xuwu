/*
 * @Author: your name
 * @Date: 2021-04-22 18:09:26
 * @LastEditTime: 2021-05-14 20:04:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-structure/generator/template/api/common.js
 */
import {ajax} from '@/utils/ajax'

export const testApi = () => {
  return ajax({
    method: 'get',
    url: `/test`
  })
}