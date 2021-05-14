import axios from 'axios'

// 普通接口
const ajax = axios.create({
  baseURL: '',
  timeout: 50000, // 请求超时时间,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  params: {}
})

ajax.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

ajax.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    ('err' + error)
    return Promise.reject(error)
  }
)

export { ajax }
