let types = require('@babel/types')

class MainAstCommon {
  /*******
   * @description:
   */
  astMainHeaderAddPinia() {
    return {
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
      }
    }
  }
  astMainBodyAddPinia() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let methods = path.node.body
        let resultIndex = methods.length - 1
        console.log('!!!@!@', methods)
        methods.forEach((element, index) => {
          if (element.type === 'VariableDeclaration') {
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

        methods.splice(resultIndex, 0, createPiniaAst)
      }
    }
  }
  astMainBodyAddPiniaUniapp() {
    return {
      BlockStatement(path) {
        // 添加依赖包的引入
        let methods = path.node.body
        let resultIndex = methods.length - 1
        methods.forEach((element, index) => {
          if (element.type === 'VariableDeclaration') {
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

        methods.splice(resultIndex, 0, createPiniaAst)
      }
    }
  }
}

module.exports = new MainAstCommon()
