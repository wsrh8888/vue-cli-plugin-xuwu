/*
 * @Author: your name
 * @Date: 2021-05-10 19:44:50
 * @LastEditTime: 2021-06-09 11:48:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /task-system/src/api/index.js
 */
import { request } from '@/utils/request'
import { methodList } from '@/utils/interface'
import { test } from '@/utils/config'

export const getCodeApi = () => {
  return request({
    url: `${test}/test`,
    method: methodList.GET
  })
}
