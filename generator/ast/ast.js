let core = require('@babel/core')

class AST {
  writeAst(source, plugin) {
    let targetSource = core.transform(source, {
      filename: '',
      plugins: plugin
    })
    return targetSource.code
  }
  getAstCoreList(array) {
    return array.map((item) => {
      return {
        visitor: {
          ...item()
        }
      }
    })
  }
}

module.exports = AST
