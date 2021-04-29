/*
 * @Author: your name
 * @Date: 2021-04-26 16:32:03
 * @LastEditTime: 2021-04-29 20:58:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/prompts.js
 */
module.exports = (pkg, name) => {
  const prompts = [
    {
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
      when: answers => answers.configType === 'manually',
      type: 'checkbox', 
      name: 'manuallyValue', 
      message: 'Check the features needed for your project', 
      choices: [
        {name: '初始化配置文件', value: 'initProject'},
        {name: '生产环境去掉console', value: 'removeConsole'},
        { name: 'commit代码时统一风格', value: 'lintStaged' },
        { name: 'consoleLog控制台', value: 'consoleLog' },
        { name: '适配插件', value: 'flexible' }
      ],
      default: answers => answers.useType === 'pc' ? ['lintStaged', 'removeConsole', 'initProject'] : ['consoleLog', 'flexible', 'lintStaged', 'removeConsole', 'initProject'],
    }
  ]
  return prompts
}