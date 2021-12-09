const FilePackage = require('../compilation/package')

class Common {
  filePackage = new FilePackage()

  commonSass = () => {
    this.filePackage.packageSass()
  }
}

module.exports = Common