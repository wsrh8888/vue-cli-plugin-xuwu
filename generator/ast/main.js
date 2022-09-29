let core = require('@babel/core')

let types = require('@babel/types')

module.exports = {
  astMainPinia(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        Program(path) {
          // 添加依赖包的引入
          let methods = path.node.body
          let astCode = types.importDeclaration(
            [
              types.importSpecifier(
                types.identifier('createPinia'),
                types.identifier('createPinia')
              )
            ],
            types.stringLiteral('pinia')
          )
          methods.splice(1, 0, astCode)
          let resultIndex = methods.length - 1
          methods.forEach((element, index) => {
            if (element.type === 'VariableDeclaration') {
              console.log('element.declaration', element.declarations[0].id)

              if (element.declarations[0].id.name === 'app') {
                resultIndex = index + 1
              }
            }
          })
          let createPiniaAst = types.expressionStatement(
            types.callExpression(
              types.memberExpression(
                types.identifier('app'),
                types.identifier('use')
              ),
              [types.callExpression(types.identifier('createPinia'), [])]
            )
          )
          console.log('resultIndex', resultIndex)

          methods.splice(resultIndex, 0, createPiniaAst)
        }
      }
    }
    let targetSource = core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return targetSource.code
  }
}
