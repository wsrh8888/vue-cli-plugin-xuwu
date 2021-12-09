module.exports = () => {
  const prompts = [
    {
      type: 'list',
      name: 'promptsLanguage',
      message: '请选择自己的语言',
      choices: [
        { name: 'vue-cli', value: 'web' },
        { name: 'uniapp', value: 'uniapp' }
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
    {
      when: (answers) => {
        return (
          answers.promptsLanguage === 'web' &&
          answers.promptsPcConfig === 'manually'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: '打包编译为ES5（vite暂不支持）', value: 'templateES5' },
        { name: '生产环境去掉console', value: 'templateRemoveConsole' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'consoleLog控制台', value: 'templateAddVconsole' },
        { name: '适配插件', value: 'templateFlexible' }
      ],
      default: (answers) =>
        answers.promptsScene === 'pc'
          ? [
              'templateRequest',
              'templateES5',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv'
            ]
          : [
              'templateAddVconsole',
              'templateRequest',
              'templateES5',
              'templateFlexible',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv'
            ]
    },
    {
      when: (answers) => {
        return (
          answers.promptsLanguage === 'uniapp' &&
          answers.promptsPcConfig === 'manually'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'sass依赖', value: 'templateSass' },
        { name: 'ajax请求模板', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' }
      ],
      default: [
        'templateLintStaged',
        'templateSass',
        'templateRequest',
        'templateCrossEnv'
      ]
    },
    {
      when: (answers) => {
        return (
          answers.promptsLanguage === 'web' &&
          answers.promptsPcConfig === 'manually'
        )
      },
      type: 'list',
      name: 'promptsUiConfig',
      message: '请选择使用的UI库(按需引入)',
      choices: [
        { name: '无', value: '' },
        { name: 'Element', value: 'UiElement' },
        { name: 'Vant', value: 'UiVant' },
        { name: 'AntDesign', value: 'UiAntDesign' }
      ],
      default: (answers) => (answers.promptsScene === 'pc' ? 'UiElement' : 'UiVant')
    }
  ]
  return prompts
}
