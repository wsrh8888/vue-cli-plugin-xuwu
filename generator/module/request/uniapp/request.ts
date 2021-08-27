import { methodList } from './interface'

export function request({
  url = '',
  data = {},
  method = methodList.GET,
  header = {},
  timeout = 60000
}): any {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    uni.request({
      url: url,
      data: data,
      method: method,
      timeout,
      header: header,
      success: (res: any) => {
        if (res.statusCode !== 200) {
          reject('调用失败')
        } else {
          resolve(res.data)
        }
      },
      fail: (err: any) => {
        reject(err.errMsg)
      }
    })
  })
}
