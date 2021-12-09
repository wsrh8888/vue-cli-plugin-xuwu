import axios from 'axios'

// 普通接口
const request = axios.create({
  baseURL: '',
  url: '',
  data: {},
  timeout: 50000, // 请求超时时间,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  params: {}
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export { request }
