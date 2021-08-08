/*
 * @Author: your name
 * @Date: 2021-08-07 22:38:20
 * @LastEditTime: 2021-08-08 12:44:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/controller/platrorm.js
 */
const Xuwu = require('../../utils/tools')
const UniappJs = require('./uniapp')
const WebJs = require('./web')
class Platforms {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  tsOrJs = Xuwu.getTsOrJs()
  vueVersion = Xuwu.getVueVersion()
  uniappJs = new UniappJs()
  webJs = new WebJs()
  getPlatforms() {
    return this.webJs
    // return new UniappJs()
  }
}

module.exports = Platforms
