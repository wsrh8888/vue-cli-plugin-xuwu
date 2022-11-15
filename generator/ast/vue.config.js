const AST = require('./ast')
const astCommon = require('./vueConfig/vueConfig')

class VueConfigAst extends AST {
  astVueConfigAddCrossEnv(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.vueConfigHeaderAddProcess,
        astCommon.vueConfigHeaderAddCrossEnv,
        astCommon.vueConfigBodyAddCrossEnv
      ])
    )
  }
}

module.exports = new VueConfigAst()
