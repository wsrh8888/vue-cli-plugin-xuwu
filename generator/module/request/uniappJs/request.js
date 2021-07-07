/*
 * @Author: your name
 * @Date: 2021-05-14 19:29:01
 * @LastEditTime: 2021-05-14 20:05:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/generator/module/reuest_uniapp.js
 */

export function request({
  url = '',
  data = {},
  method = 'get',
  header = {},
  timeout = 60000
}) {
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
