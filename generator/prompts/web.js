/**
 * @description: web自定义pc端
 * @return {*}
 */
export const webManuallyPc = {
  when: (answers) => {
    return (
      answers.promptsLanguage === 'web' &&
      answers.promptsPcConfig === 'manually' &&
      answers.promptsScene === 'pc'
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
}

/**
 * @description: web自定义移动端
 * @return {*}
 */
export const webManuallyMobile = {
  when: (answers) => {
    return (
      answers.promptsLanguage === 'web' &&
      answers.promptsPcConfig === 'manually' &&
      answers.promptsScene === 'mobile'
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
  default: () => [
    'templateRequest',
    'templateES5',
    'templateLintStaged',
    'templateRemoveConsole',
    'templateCrossEnv'
  ]
}
