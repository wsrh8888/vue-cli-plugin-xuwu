/*
 * @Author: your name
 * @Date: 2021-05-14 19:29:26
 * @LastEditTime: 2021-07-07 14:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/module/request/request_uniapp.ts
 */
import { methodList } from './interface'

export function request({
  url = '',
  data = {},
  method = methodList.GET,
  header = {},
  timeout = 60000
}): any {
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      data: data,
      method: method,
      timeout,
      header: header,
      success: (res) => {
        if (res.statusCode !== 200) {
          reject('调用失败')
        } else {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err.errMsg)
      }
    })
  })
}
