/*
 * @Author: your name
 * @Date: 2021-07-26 14:50:22
 * @LastEditTime: 2021-07-26 19:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2ts/utils/html2canvas.js
 */
import html2canvas from 'html2canvas'

/**
 * @description: html2canvas 页面进行简单的抽离
 * @param {element} DOM元素
 * @param {Options} 属性配置对象
 * @return {Promise}
 */
export default (element: any, Options: Object) => {
  return html2canvas(element, {
    allowTaint: false, //允许跨域
    backgroundColor: '#ffffff', //canvas的背景颜色，如果没有设定默认透明
    canvas: null, //canvas 用作绘图基础的现有 元素
    foreignObjectRendering: false, //是否在浏览器支持的情况下使用ForeignObject渲染
    imageTimeout: 15000, //加载图像的超时（以毫秒为单位）。设置 0 为禁用超时。
    // ignoreelements: () => false, //谓词函数，用于从渲染中删除匹配元素。
    logging: true, //启用日志记录以进行调试
    onclone: null, //在克隆文档进行渲染时调用的回调函数可用于修改将在不影响原始源文档的情况下呈现的内容。
    proxy: null, //Url到 代理 ，用于加载跨源图像。如果留空，则不会加载跨原始图像。
    removeContainer: true, //是否要清理克隆的DOM元素html2canvas会暂时创建
    scale: element.ownerDocument.defaultView.devicePixelRatio || 1, //用于渲染的比例。默认为浏览器设备像素比率。\
    useCORS: false, //是否尝试使用CORS从服务器加载图像,默认是false
    scrillX: element.ownerDocument.defaultView.pageXOffset, //渲染元素时使用的x滚动位置（例如，如果element使用 position: fixed ）
    scrollY: element.ownerDocument.defaultView.pageYOffset, //渲染元素时使用的y滚动位置（例如，如果element使用 position: fixed ）
    windowWidth: element.ownerDocument.defaultView.innerWidth, //渲染时使用的窗口宽度 element ，可能会影响媒体查询等内容
    windowHeight: element.ownerDocument.defaultView.innerHeight, //渲染时使用的窗口高度 element ，这可能会影响媒体查询等内容
    // width,       //canvas的宽度,这部分解析有点费劲，就不进行二次封装了，使用html2canvas默认自带的
    // height,      //canvas的高度，这部分解析有点费劲，就不进行二次封装了，使用html2canvas默认自带的
    // left,        //裁剪画布x坐标，这部分解析有点费劲，就不进行二次封装了，使用html2canvas默认自带的
    // top,         //裁剪画布y坐标，这部分解析有点费劲，就不进行二次封装了，使用html2canvas默认自带的
    ...Options
  })
}
