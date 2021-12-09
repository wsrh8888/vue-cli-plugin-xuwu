import html2canvas from 'html2canvas'
/**
 * @description: html2canvas 页面进行简单的抽离
 * @param {element} DOM元素
 * @param {Options} 属性配置对象
 * @param {Options.allowTaint} 允许跨域
 * @param {Options.backgroundColor} canvas的背景颜色，如果没有设定默认透明
 * @param {Options.canvas} canvas 用作绘图基础的现有 元素
 * @param {Options.foreignObjectRendering} 是否在浏览器支持的情况下使用ForeignObject渲染
 * @param {Options.imageTimeout} 加载图像的超时（以毫秒为单位）。设置 0 为禁用超时。
 * @param {Options.logging} 启用日志记录以进行调试
 * @param {Options.onclone} 在克隆文档进行渲染时调用的回调函数可用于修改将在不影响原始源文档的情况下呈现的内容。
 * @param {Options.proxy} Url到 代理 ，用于加载跨源图像。如果留空，则不会加载跨原始图像。
 * @param {Options.removeContainer} 是否要清理克隆的DOM元素html2canvas会暂时创建
 * @param {Options.scale} 用于渲染的比例。默认为浏览器设备像素比率。
 * @param {Options.useCORS} 是否尝试使用CORS从服务器加载图像,默认是false
 * @param {Options.scrillX} 渲染元素时使用的x滚动位置（例如，如果element使用 position: fixed ）
 * @param {Options.scrollY} 渲染元素时使用的y滚动位置（例如，如果element使用 position: fixed ）
 * @param {Options.windowWidth} 渲染时使用的窗口宽度 element ，可能会影响媒体查询等内容
 * @param {Options.windowHeight} 渲染时使用的窗口高度 element ，这可能会影响媒体查询等内容
 * @param {Options.width} canvas的宽度
 * @param {Options.height} canvas的高度
 * @param {Options.left} 裁剪画布x坐标
 * @param {Options.top} 裁剪画布y坐标
 * @param {Options.top} 谓词函数，用于从渲染中删除匹配元素。
 * @return {Promise()}
 */
export default (element, Options) => {
  return html2canvas(element, {
    allowTaint: false,
    backgroundColor: '#ffffff',
    canvas: null,
    foreignObjectRendering: false,
    imageTimeout: 15000,
    logging: true,
    onclone: null,
    proxy: null,
    removeContainer: true,
    scale: element.ownerDocument.defaultView.devicePixelRatio || 1,
    useCORS: false,
    scrillX: element.ownerDocument.defaultView.pageXOffset,
    scrollY: element.ownerDocument.defaultView.pageYOffset,
    windowWidth: element.ownerDocument.defaultView.innerWidth,
    windowHeight: element.ownerDocument.defaultView.innerHeight,
    // width,       //配置默认值有点费劲，根据实际情况自己覆盖对应的值
    // height,      //配置默认值有点费劲，根据实际情况自己覆盖对应的值
    // left,        //配置默认值有点费劲，根据实际情况自己覆盖对应的值
    // top,         //配置默认值有点费劲，根据实际情况自己覆盖对应的值,
    // ignoreelements: () => false, //配置默认值有点费劲，根据实际情况自己覆盖对应的值,
    ...Options
  })
}
