/*
 * @Author: your name
 * @Date: 2021-04-27 20:54:34
 * @LastEditTime: 2021-06-07 10:56:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/module/rem.js
 */
;(function () {
  const ua = navigator.userAgent.toLowerCase()
  // 基准大小
  const baseSize = 37.5
  // 设置 rem 函数
  function setRem(pageWidth) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / pageWidth
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + 'px'
  }

  if (ua.search('pad') > -1) {
    // 在pad中
    setRem(1024)
  } else {
    setRem(375)
  }
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    if (navigator.userAgent.toLowerCase().search('pad') > -1) {
      // 在pad中
      setRem(1024)
    } else {
      setRem(375)
    }
  }
})()
