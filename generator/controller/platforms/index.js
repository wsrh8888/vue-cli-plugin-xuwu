/*
 * @Author: your name
 * @Date: 2021-08-07 22:38:20
 * @LastEditTime: 2021-08-08 13:44:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/controller/platrorm.js
 */
const Xuwu = require('../../utils/tools')
const UniappJs = require('./uniapp.js')
const UniappTs = require('./uniapp.js')
const WebJs = require('./web.js')
const WebTs = require('./web.ts')

class Platforms {
  api = Xuwu.getApi()
  options = Xuwu.getOption()
  tsOrJs = Xuwu.getTsOrJs()
  vueVersion = Xuwu.getVueVersion()
  language = Xuwu.getLanguage()
  uniappJs = new UniappJs()
  uniappTs = new UniappTs()
  webJs = new WebJs()
  webTs = new WebTs()

  getPlatforms() {
    if (this.language === 'web' && this.tsOrJs === 'js') {
      return this.webJs
    } else if (this.language === 'web' && this.tsOrJs === 'ts') {
      return this.webJs
    } else if (this.language === 'uniapp' && this.tsOrJs === 'js') {
      return this.uniappJs
    } else if (this.language === 'uniapp' && this.tsOrJs === 'ts') {
      return this.uniappTs
    }
    return this.webJs
  }
  platformsLintStaged() {
    this.api.render({
      '/.eslintrc.js': '../../module/_eslintrc.js',
      '/.eslintignore': '../../module/_eslintignore',
      '/.prettierrc': '../../module/_prettierrc'
    })
  }
}

module.exports = Platforms
