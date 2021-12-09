/**
 * @description: 获取当前设备的操作系统
 * @param {*}
 * @return {string}
 */
export const geSystem = () => {
  let ua = navigator.userAgent
  if (Boolean(ua.match(/compatible/i)) || ua.match(/Windows/i)) {
    return 'windows'
  } else if (Boolean(ua.match(/Macintosh/i)) || ua.match(/MacIntel/i)) {
    return 'macOS'
  } else if (ua.match(/iPad/i)) {
    return 'iPad'
  } else if (Boolean(ua.match(/iphone/i)) || ua.match(/Ipad/i)) {
    return 'ios'
  } else if (Boolean(ua.match(/android/i))) {
    return 'android'
  } else {
    return 'other'
  }
}
/**
 * @description: 获取当前设备使用的浏览器或者在哪里打开的
 * @param {*} null
 * @return {string}
 */
export const getBrowser = () => {
  let ua = navigator.userAgent
  let browers = [
    {
      name: 'sgssapp',
      regexp: /sogousearch/i.test(ua)
    },
    {
      name: 'wechat',
      regexp: /MicroMessenger/i.test(ua)
    },
    {
      name: 'weibo',
      regexp: Boolean(ua.match(/Weibo/i))
    },
    {
      name: 'uc',
      regexp: Boolean(ua.match(/UCBrowser/i)) || ua.indexOf(' UBrowser') > -1
    },
    {
      name: 'sogou',
      regexp: ua.indexOf('MetaSr') > -1 || ua.indexOf('Sogou') > -1
    },
    {
      name: 'xiaomi',
      regexp: ua.indexOf('MiuiBrowser') > -1
    },
    {
      name: 'vivo',
      regexp: ua.indexOf('VivoBrowser') > -1
    },
    {
      name: 'huawei',
      regexp: ua.indexOf('HuaweiBrowser') > -1
    },
    {
      name: 'baidu',
      regexp: ua.indexOf('Baidu') > -1 || ua.indexOf('BIDUBrowser') > -1
    },
    {
      name: 'quark',
      regexp: ua.indexOf('quark') > -1
    },
    {
      name: '360',
      regexp: ua.indexOf('360EE') > -1 || ua.indexOf('360SE') > -1
    },
    {
      name: '2345',
      regexp: ua.indexOf('2345Explorer') > -1
    },
    {
      name: 'edge',
      regexp: ua.indexOf('Edge') > -1
    },
    {
      name: 'ie11',
      regexp: ua.indexOf('Trident') > -1 && ua.indexOf('rv:11.0') > -1
    },
    {
      name: 'ie',
      regexp: ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1
    },
    {
      name: 'firefox',
      regexp: ua.indexOf('Firefox') > -1
    },
    {
      name: 'safari',
      regexp: ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1
    },
    {
      name: 'liebao',
      regexp: ua.indexOf('liebaofast') > -1
    },
    {
      name: 'qqbrowser',
      regexp: ua.indexOf('MQQBrowser') > -1 && ua.indexOf('QQ') === -1
    },
    {
      name: 'qq',
      regexp: ua.indexOf('QQ') > -1
    },
    {
      name: 'chrome',
      regexp: ua.indexOf('Chrome') > -1 || ua.indexOf('CriOS') > -1
    },
    {
      name: 'opera',
      regexp: ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1
    }
  ]
  for (let i = 0; i < browers.length; i++) {
    if (browers[i].regexp) {
      return browers[i].name
    }
  }
  return 'other'
}
