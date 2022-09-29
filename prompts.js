const {
  viteWebVue3Manually,
  webpackWebVue3Manually,
  webpackWebVue2Manually
} = require('./prompts/web')
const path = require('path')
const {
  fileIsExit,
} = require('./generator/utils/fs')
const fs = require('fs-extra')
const { getBuildToolName, getLanguage, getVueVersion } = require('./generator/utils/xuwu')

module.exports = () => {
  let language = ''
  let toolName = ''
  let vueVersion = ''
  // 判断是否是package.json的项目
  if (fileIsExit(path.join(process.cwd(), 'package.json'))) {
    language = getLanguage()
    toolName =  getBuildToolName()
    vueVersion = getVueVersion()
  } else {
  }
  
  const prompts = [
    {
      when: () => language === 'web',
      type: 'list',
      name: 'promptsScene',
      message: '请选择使用的场景',
      choices: [
        { name: 'pc', value: 'pc' },
        { name: 'mobile', value: 'mobile' }
      ],
      default: 'pc'
    },
    {
      type: 'list',
      name: 'promptsConfig',
      message: '请选择配置',
      choices: [
        { name: 'default(默认配置)', value: 'default' },
        { name: ' Manually select features', value: 'manually' }
      ],
      default: 'default'
    },
    viteWebVue3Manually(language, toolName, vueVersion),
    webpackWebVue3Manually(language, toolName, vueVersion),
    webpackWebVue2Manually(language, toolName, vueVersion)
    // uniappManually
  ]
  return prompts
}
