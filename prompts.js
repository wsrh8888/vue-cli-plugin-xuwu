/*
 * @Author: your name
 * @Date: 2021-04-26 16:32:03
 * @LastEditTime: 2021-05-14 16:45:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/prompts.js
 */
module.exports = (pkg, name) => {
  const prompts = [
    {
      type: 'language', 
      name: 'language', 
      message: '请选择自己的语言', 
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'uniapp', value: 'uniapp' }
      ],
      default: 'vue',
    },
    {
      when: answers => answers.language === 'vue',
      type: 'list', 
      name: 'useType', 
      message: '请选择使用的场景', 
      choices: [
        { name: 'pc', value: 'pc' },
        { name: 'mobile', value: 'mobile' }
      ],
      default: 'pc',
    },
    {
      type: 'list', 
      name: 'configType', 
      message: '请选择配置', 
      choices: [
        { name: 'default(默认配置)', value: 'default' },
        { name: ' Manually select features', value: 'manually' }
      ],
      default: 'default',
    },
    {
      when: answers => {return answers.language === 'vue' && answers.configType === 'manually'},
      type: 'checkbox', 
      name: 'manuallyValue', 
      message: 'Check the features needed for your project', 
      choices: [
        {name: '初始化环境变量', value: 'crossEnv'},
        {name: '初始化配置文件', value: 'initProject'},
        {name: '生产环境去掉console', value: 'removeConsole'},
        { name: 'commit代码时统一风格', value: 'lintStaged' },
        { name: 'consoleLog控制台', value: 'consoleLog' },
        { name: '适配插件', value: 'flexible' },
        { name: 'vue拖拽插件', value: 'vuedraggable' }
      ],
      default: answers => answers.useType === 'pc' ? ['lintStaged', 'removeConsole', 'initProject', 'crossEnv'] : ['consoleLog', 'flexible', 'lintStaged', 'removeConsole', 'initProject', 'crossEnv'],
    }, {
      when: answers => {return answers.language === 'uniapp' && answers.configType === 'manually'},
      type: 'checkbox', 
      name: 'manuallyValue', 
      message: 'Check the features needed for your project', 
      choices: [
        { name: 'commit代码时统一风格', value: 'lintStaged' },
      ],
      default: ['lintStaged', 'removeConsole', 'initProject', 'crossEnv']
    }
  ]
  return prompts
}