const fs = require('fs')

module.exports = {
  /*******
   * @description: 某个文件是否存在
   */
  fileIsExit(path) {
    return fs.existsSync(path)
  },
  /*******
   * @description: 是否存在某个包
   * @param {*} file 文件字符串
   * @param {*} name 包名
   */
  fsIsExistPackage(file, name) {
    return file.search('"' + name + '"') !== -1
  }
}
