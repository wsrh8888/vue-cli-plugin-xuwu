module.exports = {
  viteUniappVue3ManuallyPc(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue3' &&
          toolName === 'vite' &&
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
      default: () => [
        'templateRequest',
        'templateES5',
        'templateLintStaged',
        'templateRemoveConsole',
        'templateCrossEnv'
      ]
    }
  },
  viteUniappVue3ManuallyMobile(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue3' &&
          toolName === 'vite' &&
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
  },
  viteUniappVue2ManuallyPc(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue2' &&
          toolName === 'vite' &&
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
      default: () => [
        'templateRequest',
        'templateES5',
        'templateLintStaged',
        'templateRemoveConsole',
        'templateCrossEnv'
      ]
    }
  },
  viteUniappVue2ManuallyMobile(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue2' &&
          toolName === 'vite' &&
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
  },
  webpackUniappVue3ManuallyPc(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue3' &&
          toolName === 'webpack' &&
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
      default: () => [
        'templateRequest',
        'templateES5',
        'templateLintStaged',
        'templateRemoveConsole',
        'templateCrossEnv'
      ]
    }
  },
  webpackUniappVue3ManuallyMobile(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue3' &&
          toolName === 'webpack' &&
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
  },
  webpackUniappVue2ManuallyPc(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue2' &&
          toolName === 'webpack' &&
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
      default: () => [
        'templateRequest',
        'templateES5',
        'templateLintStaged',
        'templateRemoveConsole',
        'templateCrossEnv'
      ]
    }
  },
  webpackUniappVue2ManuallyMobile(language, toolName, frame) {
    console.log('language, toolName, frame', language, toolName, frame)

    return {
      when: (answers) => {
        return (
          language === 'web' &&
          frame === 'vue2' &&
          toolName === 'webpack' &&
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
  }
}``
