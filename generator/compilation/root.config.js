const Xuwu = require('../utils/xuwu')

class RootConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  /*******
   * @description: 在根路径下添加postcss.config.js文件
   * @param {*}
   * @return {*}
   */
  postcssConfigFile() {
    this.api.render({
      '/postcss.config.cjs': '../template/root/postcss.config.js'
    })
  }
  envConfigFile() {
    this.api.render({
      '/.env.pre': '../template/root/.env.pre',
      '/.env.prod': '../template/root/.env.prod',
      '/.env.test': '../template/root/.env.test'
    })
  }
  eslintConfigFileVue3() {
    if (Xuwu.getTsOrJs() === 'ts') {
      this.api.render({
        '/.eslintrc.js': '../template/root/vue3/_eslintrc.js',
        '/.gitignore': '../template/root/_gitignore',
        '/.eslintignore': '../template/root/_eslintignore',
        '/.prettierrc': '../template/root/_prettierrc'
      })
    } else {
      this.api.render({
        '/.eslintrc.js': '../template/root/vue3/_eslintrcJs.js',
        '/.gitignore': '../template/root/_gitignore',
        '/.eslintignore': '../template/root/_eslintignore',
        '/.prettierrc': '../template/root/_prettierrc'
      })
    }
  }
  eslintConfigFile() {
    this.api.render({
      '/.eslintrc.js': '../template/root/_eslintrc.js',
      '/.gitignore': '../template/root/_gitignore',
      '/.eslintignore': '../template/root/_eslintignore',
      '/.prettierrc': '../template/root/_prettierrc'
    })
  }
}

module.exports = RootConfig
