let types = require('@babel/types')

class VueConfigAstCommon {
  /*******
   * @description: 给vue的Header导入process
   */
  vueConfigHeaderAddProcess() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (body.type === 'VariableDeclaration' && body.kind === 'const') {
            try {
              if (body.declarations[0].id.name === 'process') {
                isEnd = true
              }
            } catch (error) {
              isEnd = false
            }
          }
        })
        if (isEnd) {
          return
        }

        let astCode = types.variableDeclaration('const', [
          types.variableDeclarator(
            types.identifier('process'),
            types.callExpression(types.identifier('require'), [
              types.stringLiteral('process')
            ])
          )
        ])

        bodys.splice(1, 0, astCode)
      }
    }
  }
  /*******
   * @description: 给vue的Header增加loadEnv属性
   */
  vueConfigHeaderAddCrossEnv() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false
        let moduleExportsIndex = 1
        bodys.forEach((body, index) => {
          if (
            body.type === 'FunctionDeclaration' &&
            body.id.name === 'baseUrl'
          ) {
            isEnd = true
          }
          if (
            body.type === 'ExpressionStatement' &&
            body.expression.left.object.name === 'module' &&
            body.expression.left.property.name === 'exports'
          ) {
            moduleExportsIndex = index
          }
        })
        if (isEnd) {
          return
        }

        let astCode = types.functionDeclaration(
          types.identifier('baseUrl'),
          [],
          types.blockStatement([
            types.variableDeclaration('let', [
              types.variableDeclarator(
                types.identifier('base'),
                types.stringLiteral('')
              )
            ]),
            types.ifStatement(
              types.logicalExpression(
                '&&',
                types.binaryExpression(
                  '===',
                  types.memberExpression(
                    types.memberExpression(
                      types.identifier('process'),
                      types.identifier('env')
                    ),
                    types.identifier('NODE_ENV')
                  ),
                  types.stringLiteral('production')
                ),
                types.binaryExpression(
                  '===',
                  types.memberExpression(
                    types.memberExpression(
                      types.identifier('process'),
                      types.identifier('env')
                    ),
                    types.identifier('API_ENV')
                  ),
                  types.stringLiteral('test')
                )
              ),
              types.blockStatement([
                types.expressionStatement(
                  types.assignmentExpression(
                    '=',
                    types.identifier('base'),
                    types.stringLiteral('/')
                  )
                )
              ]),
              types.ifStatement(
                types.logicalExpression(
                  '&&',
                  types.binaryExpression(
                    '===',
                    types.memberExpression(
                      types.memberExpression(
                        types.identifier('process'),
                        types.identifier('env')
                      ),
                      types.identifier('NODE_ENV')
                    ),
                    types.stringLiteral('production')
                  ),
                  types.binaryExpression(
                    '===',
                    types.memberExpression(
                      types.memberExpression(
                        types.identifier('process'),
                        types.identifier('env')
                      ),
                      types.identifier('API_ENV')
                    ),
                    types.stringLiteral('prod')
                  )
                ),
                types.blockStatement([
                  types.expressionStatement(
                    types.assignmentExpression(
                      '=',
                      types.identifier('base'),
                      types.stringLiteral('/')
                    )
                  )
                ]),
                types.ifStatement(
                  types.logicalExpression(
                    '&&',
                    types.binaryExpression(
                      '===',
                      types.memberExpression(
                        types.memberExpression(
                          types.identifier('process'),
                          types.identifier('env')
                        ),
                        types.identifier('NODE_ENV')
                      ),
                      types.stringLiteral('production')
                    ),
                    types.binaryExpression(
                      '===',
                      types.memberExpression(
                        types.memberExpression(
                          types.identifier('process'),
                          types.identifier('env')
                        ),
                        types.identifier('API_ENV')
                      ),
                      types.stringLiteral('pre')
                    )
                  ),
                  types.blockStatement([
                    types.expressionStatement(
                      types.assignmentExpression(
                        '=',
                        types.identifier('base'),
                        types.stringLiteral('/')
                      )
                    )
                  ]),
                  types.blockStatement([
                    types.expressionStatement(
                      types.assignmentExpression(
                        '=',
                        types.identifier('base'),
                        types.stringLiteral('/')
                      )
                    )
                  ])
                )
              )
            ),
            types.returnStatement(types.identifier('base'))
          ])
        )

        bodys.splice(moduleExportsIndex, 0, astCode)
      }
    }
  }
  /*******
   * @description: 给vue的Body增加loadEnv属性
   */
  vueConfigBodyAddCrossEnv() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let rightList = []
        bodys.forEach((body) => {
          if (
            body.type === 'ExpressionStatement' &&
            body.expression.left.object.name === 'module' &&
            body.expression.left.property.name === 'exports'
          ) {
            rightList = body.expression.right.properties
          }
        })
        let publicPathIsExit = false
        // 搜索是否找到
        rightList.forEach((item) => {
          if (item.key.name === 'publicPath') {
            publicPathIsExit = true
          }
        })
        if (!publicPathIsExit) {
          rightList.push(
            types.objectProperty(
              types.identifier('publicPath'),
              types.stringLiteral('/')
            )
          )
        }
        rightList.forEach((item) => {
          if (item.key.name === 'publicPath') {
            item.value = types.callExpression(types.identifier('baseUrl'), [])
          }
        })
      }
    }
  }
}
module.exports = new VueConfigAstCommon()
