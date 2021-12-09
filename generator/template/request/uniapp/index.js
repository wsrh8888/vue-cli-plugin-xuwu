import { request } from '@/utils/request'
import { methodList } from '@/utils/interface'
import { test } from '@/utils/config'
export const getCodeApi = () => {
  return request({
    url: `${test}/test`,
    method: methodList.GET
  })
}
