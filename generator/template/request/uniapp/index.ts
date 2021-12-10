import { request } from '@/utils/request'
import { test } from '@/utils/config'

export const getCodeApi = () => {
  return request({
    method: 'get',
    url: `${test}/test`
  })
}
