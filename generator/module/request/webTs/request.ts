/*
 * @Author: your name
 * @Date: 2021-05-14 19:28:42
 * @LastEditTime: 2021-05-14 19:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/module/request_vue.ts
 */
import axios from 'axios'

// 普通接口
const ajax = axios.create({
  baseURL: '',
  url: '',
  data: {},
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
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export { ajax }
