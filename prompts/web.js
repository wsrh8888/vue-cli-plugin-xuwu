module.exports = {
  vite2WebVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
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
        { name: '生产环境去掉console', value: 'templateRemoveConsole' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'consoleLog控制台', value: 'templateAddVconsole' },
        { name: '适配插件', value: 'templateFlexible' },
        { name: 'Element', value: 'uiElement' },
        { name: 'SVG解析', value: 'templateSvgLoader' },
        { name: '打包体积分析', value: 'templateVisualizer' },
        { name: 'Pinia', value: 'templatePinia' },
        { name: 'Vant', value: 'uiVant' }
      ],
      default: (answers) =>
        answers.promptsScene === 'pc'
          ? [
              'templateRequest',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiElement',
              'templateSvgLoader'
            ]
          : [
              'templateAddVconsole',
              'templateRequest',
              'templateFlexible',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiVant',
              'templateSvgLoader'
            ]
    }
  },
  vite3WebVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
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
        { name: '生产环境去掉console', value: 'templateRemoveConsole' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'consoleLog控制台', value: 'templateAddVconsole' },
        { name: '适配插件', value: 'templateFlexible' },
        { name: 'Element', value: 'uiElement' },
        { name: 'SVG解析', value: 'templateSvgLoader' },
        { name: '打包体积分析', value: 'templateVisualizer' },
        { name: 'Pinia', value: 'templatePinia' },
        { name: 'Vant', value: 'uiVant' }
      ],
      default: (answers) =>
        answers.promptsScene === 'pc'
          ? [
              'templateRequest',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiElement',
              'templateSvgLoader'
            ]
          : [
              'templateAddVconsole',
              'templateRequest',
              'templateFlexible',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiVant',
              'templateSvgLoader'
            ]
    }
  },
  webpackWebVue3Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
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
        { name: '打包编译为ES5', value: 'templateES5' },
        { name: '生产环境去掉console', value: 'templateRemoveConsole' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'consoleLog控制台', value: 'templateAddVconsole' },
        { name: '适配插件', value: 'templateFlexible' },
        { name: 'Element', value: 'uiElement' },
        { name: 'Vant', value: 'uiVant' }
      ],
      default: (answers) =>
        answers.promptsScene === 'pc'
          ? [
              'templateRequest',
              'templateES5',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiElement'
            ]
          : [
              'templateAddVconsole',
              'templateRequest',
              'templateES5',
              'templateFlexible',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiVant'
            ]
    }
  },
  webpackWebVue2Manually(language, toolName, frame) {
    return {
      when: (answers) => {
        return (
          language === 'web' &&
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
        { name: '打包编译为ES5', value: 'templateES5' },
        { name: '生产环境去掉console', value: 'templateRemoveConsole' },
        { name: 'commit代码时统一风格', value: 'templateLintStaged' },
        { name: 'consoleLog控制台', value: 'templateAddVconsole' },
        { name: '适配插件', value: 'templateFlexible' },
        { name: 'Element', value: 'uiElement' },
        { name: 'Vant', value: 'uiVant' }
      ],
      default: (answers) =>
        answers.promptsScene === 'pc'
          ? [
              'templateRequest',
              'templateES5',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiElement'
            ]
          : [
              'templateAddVconsole',
              'templateRequest',
              'templateES5',
              'templateFlexible',
              'templateLintStaged',
              'templateRemoveConsole',
              'templateCrossEnv',
              'uiVant'
            ]
    }
  }
}
