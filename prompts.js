const {
  viteWebVue3ManuallyPc,
  viteWebVue3ManuallyMobile,
  viteWebVue2ManuallyPc,
  viteWebVue2ManuallyMobile,
  webpackWebVue3ManuallyPc,
  webpackWebVue3ManuallyMobile,
  webpackWebVue2ManuallyPc,
  webpackWebVue2ManuallyMobile
} = require('./generator/prompts/web')
// const { uniappManually } = require('./generator/prompts/uniapp')
const path = require('path')
const {
  fileIsExit,
  isExistPackage,
  getVueVersion
} = require('./generator/utils/fs')
const fs = require('fs-extra')

module.exports = () => {
  let language = ''
  let toolName = ''
  let vueVersion = ''
  // 判断是否是package.json的项目
  if (fileIsExit(path.join(process.cwd(), 'package.json'))) {
    let file = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      'utf-8'
    )
    language = isExistPackage(file, '@dcloudio/uni-automator')
      ? 'uniapp'
      : 'web'
    toolName = isExistPackage(file, 'vite') ? 'vite' : 'webpack'
    vueVersion = getVueVersion(file)
  } else {
  }

  // 如果有则package.json则是web项目，否则就是其他的项目

  // 如果是web项目则判断是否是uniapp项目

  // 然后判断是否是vite类型
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
      name: 'promptsPcConfig',
      message: '请选择配置',
      choices: [
        { name: 'default(默认配置)', value: 'default' },
        { name: ' Manually select features', value: 'manually' }
      ],
      default: 'default'
    },
    viteWebVue3ManuallyPc(language, toolName, vueVersion),
    viteWebVue3ManuallyMobile(language, toolName, vueVersion),
    viteWebVue2ManuallyPc(language, toolName, vueVersion),
    viteWebVue2ManuallyMobile(language, toolName, vueVersion),
    webpackWebVue3ManuallyPc(language, toolName, vueVersion),
    webpackWebVue3ManuallyMobile(language, toolName, vueVersion),
    webpackWebVue2ManuallyPc(language, toolName, vueVersion),
    webpackWebVue2ManuallyMobile(language, toolName, vueVersion)
    // uniappManually
  ]
  return prompts
}
