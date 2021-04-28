/*
 * @Author: your name
 * @Date: 2021-04-26 16:32:03
 * @LastEditTime: 2021-04-28 11:49:18
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
      message: '请选择使用的场景', 
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
        { name: 'consoleLog控制台', value: 'consoleLog' },
        { name: '适配插件', value: 'flexible' }
      ],
      default: answers => answers.useType === 'pc' ? [] : ['consoleLog', 'flexible'],
    }
  ]
  return prompts
}