/*
 * @Author: your name
 * @Date: 2021-05-10 19:44:50
 * @LastEditTime: 2021-05-14 20:02:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /task-system/src/api/index.js
 */
import { request } from '@/utils/request'
import { methodList } from '@/utils/interface'

export const getCodeApi = () => {
  return request({
    url: '214324234/aaaa',
    method: methodList.GET
  })
}
