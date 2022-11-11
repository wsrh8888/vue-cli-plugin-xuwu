module.exports = {
  webpackUniappVue3Manually(language, toolName, frame) {
    return {
      when: () => {
        return (
          language === 'uniapp' && frame === 'vue3' && toolName === 'webpack'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' }
      ],
      default: () => [
        'templateRequest',
        'templateLintStaged',
        'templateCrossEnv'
      ]
    }
  },
  webpackUniappVue2Manually(language, toolName, frame) {
    return {
      when: () => {
        return (
          language === 'uniapp' && frame === 'vue2' && toolName === 'webpack'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' }
      ],
      default: () => [
        'templateRequest',
        'templateLintStaged',
        'templateCrossEnv'
      ]
    }
  }
}
