/**
 * @description: uniapp自定义pc端
 * @return {*}
 */
export const uniappManually = {
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
}
