export function request({
  url = '',
  data = {},
  method = 'get',
  header = {},
  timeout = 60000
}) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
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
