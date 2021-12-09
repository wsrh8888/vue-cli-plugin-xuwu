import { request } from '@/utils/request'
import { test } from '@/utils/config'

export const testApi = () => {
  return request({
    method: 'get',
    url: `${test}/test`
  })
}
