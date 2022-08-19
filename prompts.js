import { webManuallyPc, webManuallyMobile } from './generator/prompts/web'
import { uniappManually } from './generator/prompts/uniapp'

module.exports = () => {
  const prompts = [
    {
      type: 'list',
      name: 'promptsLanguage',
      message: '请选择自己的语言',
      choices: [
        { name: 'web(vite-cli/vue-cli)', value: 'web' },
        { name: 'uniapp(uniapp-cli)', value: 'uniapp' }
      ],
      default: 'web'
    },
    {
      when: (answers) => answers.promptsLanguage === 'web',
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
    uniappManually,
    webManuallyPc,
    webManuallyMobile
  ]
  return prompts
}
