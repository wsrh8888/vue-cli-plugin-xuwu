/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-10 10:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/controller/controller.ts
 */
module.exports = (api) => {
  return {
    platformAddUtilsRequest() {
      api.render({
        '/src/utils/request.ts': '../../module/request/uniappTs/request.ts',
        '/src/utils/interface.ts': '../../module/request/uniappTs/interface.ts',
        '/src/api/index.ts': '../../module/request/uniappTs/index.ts'
      })
    },
    platformAddUtilsConfig() {
      api.render({
        '/src/utils/config.ts': '../../module/utils/config.ts'
      })
    }
  }
}
