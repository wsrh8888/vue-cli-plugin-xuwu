const fs = require('fs-extra')

module.exports = {
  fileIsExit(path) {
    return fs.existsSync(path)
  },
  /*******
   * @description: 是否存在某个包
   * @param {*} file 文件字符串
   * @param {*} name 包名
   * @return {*}
   */
  isExistPackage(file, name) {
    return file.search('"' + name + '"') !== -1
  },
  getVueVersion(file) {
    let result = 'vue2'
    try {
      let packageData = JSON.parse(file)
      let version =
        packageData.dependencies.vue || packageData.devDependencies.vue
      result = 'vue' + version[version.indexOf('.') - 1].toString()
    } catch (error) {
      result = 'vue2'
    }
    return result
  }
}
