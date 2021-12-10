// const FileMainVue = require('./controller/main.vue')
// const FileVueConfig = require('./controller/vue.config')
// const FileMain = require('./controller/main')
// const FilePackage = require('./controller/package')
// const FileBabelConfig = require('./controller/babel.config')
// const Platforms = require('./controller/platforms/index')
// const FileViteConfig = require('./controller/vite.config')
// const Extension = require('./controller/extension')
// const Xuwu = require('./utils/xuwu')

// /**
//  * @description: 组件的拼装中心，将一个大的功能模块拆解成不同的小模块
//  * @param {*}
//  * @return {void}
//  */
// class Compiler {
//   fileMainVue = new FileMainVue()
//   fileVueConfig = new FileVueConfig()
//   fileMain = new FileMain()
//   filePackage = new FilePackage()
//   fileBabelConfig = new FileBabelConfig()
//   platforms = new Platforms()
//   fileViteConfig = new FileViteConfig()
//   extension = new Extension()


//   /**
//    * @description: AntDesignUi，vue3用法
//    * @param {*}
//    * @return {void}
//    */
//   uiAntDesignVue3 = () => {
//     if (Xuwu.getBuildToolName() === 'vite') {
//       this.uiAntDesignVue3Vite()
//       return
//     }
//     this.filePackage.packageAntDesignVue3()
//     this.platforms.platformAddPluginsAntDesignVue3()
//     this.fileBabelConfig.babelConfigAddAntDesign()
//     this.fileMain.mainAddAntDesignVue3()
//   }
//   /**
//    * @description: VantUi，vue3用法
//    * @param {*}
//    * @return {void}
//    */
//   uiVantVue3 = () => {
//     if (Xuwu.getBuildToolName() === 'vite') {
//       this.uiVantVue3Vite()
//       return
//     }
//     this.filePackage.packageVantVue3()
//     this.platforms.platformAddPluginsVantVue3()
//     this.fileBabelConfig.babelConfigAddVant()
//     this.fileMain.mainAddVantVue3()

//   /**
//    * @description: ElementUi，vue3用法
//    * @param {*}
//    * @return {void}
//    */
//   uiElementVue3 = () => {
//     if (Xuwu.getBuildToolName() === 'vite') {
//       this.uiElementVue3Vite()
//       return
//     }
//     this.platforms.platformAddPluginsElementVue3()
//     this.filePackage.packageElementPlusUi()
//     this.fileBabelConfig.babelConfigAddElementPlus()
//     this.fileMain.mainAddElementVue3()
//   }

//   /**
//    * @description: 拖拽插件功能
//    * @param {*}
//    * @return {void}
//    */
//   pluginVuedraggable = () => {
//     this.filePackage.packageVuedraggable()
//   }

//   /**
//    * @description: 适配插件功能，vue3写法
//    * @param {*}
//    * @return {void}
//    */
//   pluginFlexibleVue3 = () => {
//     if (Xuwu.getBuildToolName() === 'vite') {
//       this.pluginFlexileVite()
//       return
//     }
//     this.pluginCrossEnv()
//     this.fileVueConfig.vueConfigAddFlexible()
//     this.filePackage.packageFlexible()
//     this.platforms.platformAddUtilsRem()
//     this.fileMain.mainAddRemVue3()
//     this.fileVueConfig.vueConfigAddPx2rem()
//     this.fileMainVue.mainVueAddMedia()
//   }
//   /**
//    * @description: consoleLog控制台功能，Vue3写法
//    * @param {*}
//    * @return {void}
//    */
//   pluginAddVconsoleVue3 = () => {
//     this.pluginCrossEnv()
//     this.filePackage.packageAddConsolePanel()
//     this.fileMain.mainAddVconsoleVue3()
//   }
// }

// module.exports = Compiler
