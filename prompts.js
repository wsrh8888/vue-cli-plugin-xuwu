/*
 * @Author: your name
 * @Date: 2021-04-26 16:32:03
 * @LastEditTime: 2021-04-26 16:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/prompts.js
 */
module.exports = pkg => {
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
    }
  ]

  return prompts
}