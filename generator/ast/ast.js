let core = require('@babel/core')

/**
 * @description: 在vue.config里增加适配相关代码
 * @param {*}
 * @return {void}
 */
class AST {
  writeAst(source, plugin) {
    let targetSource = core.transform(source, {
      plugins: [plugin]
    })
    return targetSource.code
  }
}

module.exports = AST
