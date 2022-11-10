import { request } from '@/utils/request'
const { VITE_API_BASE } = import.meta.env

export const testApi = () => {
  return request({
    method: 'get',
    url: `${VITE_API_BASE}/test`
  })
}
