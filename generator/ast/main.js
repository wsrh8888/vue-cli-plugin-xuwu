const AST = require('./ast')
const astCommon = require('./main/main')

class MainAst extends AST {
  astMainAddPinia(source) {
    return this.writeAst(source, {
      visitor: {
        ...astCommon.astMainHeaderAddPinia()
      }
    })
  }
}

module.exports = new MainAst()
