const AST = require('./ast')
const astCommon = require('./main/main')

class MainAst extends AST {
  astMainAddPinia(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.astMainHeaderAddPinia,
        astCommon.astMainBodyAddPinia
      ])
    )
  }
  astMainAddPiniaUniapp(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.astMainHeaderAddPinia,
        astCommon.astMainBodyAddPiniaUniapp
      ])
    )
  }
}

module.exports = new MainAst()
