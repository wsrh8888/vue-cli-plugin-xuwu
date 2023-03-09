const {
  vite2WebVue3Manually,
  vite3WebVue3Manually,
  vite4WebVue3Manually,
  webpackWebVue3Manually,
  webpackWebVue2Manually
} = require('./prompts/web')
const webPrompt = require('./prompts/web')
const {
  vite2UniappVue3Manually,
  vite3UniappVue3Manually,
  vite4UniappVue3Manually,
  webpackUniappVue3Manually,
  webpackUniappVue2Manually
} = require('./prompts/uniapp')
const uniappPrompt = require('./prompts/uniapp')
const path = require('path')
const { fileIsExit } = require('./generator/utils/fs')
const Xuwu = require('./generator/utils/xuwu')
const chalk = require('chalk')
const { firstUpperCase } = require('./generator/utils/tool')

module.exports = () => {
  let language = ''
  let toolName = ''
  let vueVersion = ''
  // 判断是否是package.json的项目

  if (fileIsExit(path.join(process.cwd(), 'package.json'))) {
    language = Xuwu.getLanguage()
    toolName = Xuwu.getBuildToolName()
    vueVersion = Xuwu.getVueVersion()
  }

  console.log(chalk.blueBright('<--当前项目基础信息:-->'))
  console.log('语言:', chalk.redBright(language))
  console.log('打包工具:', chalk.redBright(toolName))
  console.log('框架:', chalk.redBright(vueVersion))
  console.log('node:', chalk.redBright(process.version))
  console.log(chalk.blueBright('<-------------------->'))
  try {
    let result = `${toolName}${firstUpperCase(language)}${firstUpperCase(
      vueVersion
    )}Manually`
    if (!(webPrompt[result] || uniappPrompt[result])) {
      throw Error()
    }
  } catch (error) {
    console.error(chalk.red('Error：暂未兼容该版本哦'))
    return
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
    vite2UniappVue3Manually(language, toolName, vueVersion),
    vite3UniappVue3Manually(language, toolName, vueVersion),
    vite4UniappVue3Manually(language, toolName, vueVersion),
    vite2WebVue3Manually(language, toolName, vueVersion),
    vite3WebVue3Manually(language, toolName, vueVersion),
    vite4WebVue3Manually(language, toolName, vueVersion),
    webpackWebVue3Manually(language, toolName, vueVersion),
    webpackWebVue2Manually(language, toolName, vueVersion),
    webpackUniappVue3Manually(language, toolName, vueVersion),
    webpackUniappVue2Manually(language, toolName, vueVersion)
  ]
  return prompts
}
