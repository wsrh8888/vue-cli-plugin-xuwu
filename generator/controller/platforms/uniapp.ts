/*
 * @Author: your name
 * @Date: 2021-05-14 20:09:23
 * @LastEditTime: 2021-06-02 14:30:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/controller.js
 */
module.exports = (api) => {
  return {
    requestPlatforms() {
      api.render({
        '/src/utils/request.ts': '../../module/request/uniappTs/request.ts',
        '/src/utils/interface.ts': '../../module/request/uniappTs/interface.ts',
        '/src/api/index.ts': '../../module/request/uniappTs/index.ts'
      })
    },
    configPlatforms() {
      api.render({
        '/src/utils/config.ts': '../../module/utils/config.ts'
      })
    }
  }
}
