const FilePackage = require('../compilation/package')

class Common {
  filePackage = new FilePackage()

  templateSass = () => {
    this.filePackage.packageSass()
  }
  templateLess = () => {
    this.filePackage.packageLess()
  }
}

module.exports = Common
