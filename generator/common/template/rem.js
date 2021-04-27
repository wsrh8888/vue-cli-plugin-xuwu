/* eslint-disable */
(function() {
  if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', handleFontSize);
      document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
    }
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function() {
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    });
  }
})();
(function() {
  const ua = navigator.userAgent.toLowerCase()
  // 基准大小
  const baseSize = 37.5
  // 设置 rem 函数
  function setRem(pageWidth) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / pageWidth
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }


  if (ua.search('pad') > -1) {
    // 在pad中
    setRem(1024)
  } else {
    setRem(375)
  }
  // 改变窗口大小时重新设置 rem
  window.onresize = function() {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.search('pad') > -1) {
      // 在pad中
      setRem(1024)
    } else {
      setRem(375)
    }
  }
})()
