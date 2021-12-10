class WebpackWebVue3 {
  // 默认选择的模版
  defaultPc = () => {
    this.templateLintStaged()
    this.templateRemoveConsole()
    this.templateCrossEnv()
    this.templateRequest()
    this.uiElement()
  }
  defaultMobile = () => {
    this.templateLintStaged()
    this.templateCrossEnv()
    this.templateRemoveConsole()
    this.templateAddVconsole()
    this.templateFlexible()
    this.templateRequest()
    this.uiVant()
  }
  templateAddVconsole = () => {
    this.pluginCrossEnv()
    this.filePackage.packageAddConsolePanel()
    this.fileMain.mainAddVconsoleVue3()
  }
  templateRequest = () => {
    this.templateCrossEnv()
    this.fileUtils.request()
    this.filePackage.packageAddAxios()
  }
  templateES5 = () => {
    this.fileBabelConfig.babelConfigEs6ToEs5()
    this.filePackage.packageBabelEs6ToEs5()
  }
  templateFlexible = () => {
    this.pluginCrossEnv()
    this.fileVueConfig.vueConfigAddFlexible()
    this.filePackage.packageFlexible()
    this.platforms.platformAddUtilsRem()
    this.fileMain.mainAddRemVue3()
    this.fileVueConfig.vueConfigAddPx2rem()
    this.fileMainVue.mainVueAddMedia()
  }
  templateLintStaged = () => {
    this.filePackage.packageCommitPre()
    this.fileRootConfig.eslintConfigFile()
  }
  templateRemoveConsole = () => {
    this.filePackage.packageRemoveConsole()
    this.fileBabelConfig.babelConfigRemoveConsole()
  }
  templateCrossEnv = () => {
    this.filePackage.packageCrossEnv()
    this.fileUtils.utilConfig()
  }
  uiElement = () => {
    this.platforms.platformAddPluginsElementVue3()
    this.filePackage.packageElementPlusUi()
    this.fileBabelConfig.babelConfigAddElementPlus()
    this.fileMain.mainAddElementVue3()
  }
  uiVant = () => {
    this.filePackage.packageVantVue3()
    this.platforms.platformAddPluginsVantVue3()
    this.fileBabelConfig.babelConfigAddVant()
    this.fileMain.mainAddVantVue3()
  }
  uiAntDesign = () => {
    this.filePackage.packageAntDesignVue3()
    this.platforms.platformAddPluginsAntDesignVue3()
    this.fileBabelConfig.babelConfigAddAntDesign()
    this.fileMain.mainAddAntDesignVue3()
  }
}
module.exports = WebpackWebVue3
