module.exports = {
  webpackUniappVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'uniapp' &&
          frame === 'vue3' &&
          toolName === 'webpack' &&
          answers.promptsConfig === 'manually'
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
      when: (answers) => {
        return (
          language === 'uniapp' &&
          frame === 'vue2' &&
          toolName === 'webpack' &&
          answers.promptsConfig === 'manually'
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
  vite2UniappVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'uniapp' &&
          frame === 'vue3' &&
          toolName === 'vite2' &&
          answers.promptsConfig === 'manually'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'Pinia', value: 'templatePinia' }
      ],
      default: () => [
        'templateRequest',
        'templateLintStaged',
        'templateCrossEnv'
      ]
    }
  },
  vite3UniappVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'uniapp' &&
          frame === 'vue3' &&
          toolName === 'vite3' &&
          answers.promptsConfig === 'manually'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'Pinia', value: 'templatePinia' }
      ],
      default: () => [
        'templateRequest',
        'templateLintStaged',
        'templateCrossEnv'
      ]
    }
  },
  vite4UniappVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'uniapp' &&
          frame === 'vue3' &&
          toolName === 'vite4' &&
          answers.promptsConfig === 'manually'
        )
      },
      type: 'checkbox',
      name: 'promptsManuallyConfig',
      message: 'Check the features needed for your project',
      choices: [
        { name: 'ajax请求模版', value: 'templateRequest' },
        { name: '扩展环境变量', value: 'templateCrossEnv' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'Pinia', value: 'templatePinia' }
      ],
      default: () => [
        'templateRequest',
        'templateLintStaged',
        'templateCrossEnv'
      ]
    }
  }
}
