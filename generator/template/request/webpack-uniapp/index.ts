import { request } from '@/utils/request'

export const testApi = () => {
  return request({
    method: 'get',
    url: '/test'
  })
}
