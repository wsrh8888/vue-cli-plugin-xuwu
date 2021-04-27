<!--
 * @Author: your name
 * @Date: 2020-11-30 11:10:56
 * @LastEditTime: 2021-04-27 21:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /class-record/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
body {
  /* IOS禁止微信调整字体大小 */
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}
html,
body,
#app {
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

input {
  box-shadow: none; /*去除阴影*/
  outline: none; /*聚焦input的蓝色边框*/
  resize: none; /*textarea 禁止拖拽*/
  border: none; /*去除边框*/
  -webkit-appearance: none; /*常用于IOS下移除原生样式*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*点击高亮的颜色*/
}
</style>
