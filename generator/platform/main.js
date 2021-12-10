const FilePackage = require('../compilation/package')

class Common {
  filePackage = new FilePackage()

  cssSass = () => {
    this.filePackage.packageSass()
  }
  cssLess = () => {
    this.filePackage.packageLess()
  }
}

module.exports = Common