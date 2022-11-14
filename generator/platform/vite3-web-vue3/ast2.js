const types = require('@babel/types')
const generate = require('@babel/generator')

function createStyleImport() {
  let str = types.expressionStatement(
    types.callExpression(types.identifier('styleImport'), [
      types.objectExpression([
        types.objectProperty(
          types.identifier('libs'),
          types.arrayExpression([
            types.objectExpression([
              types.objectProperty(
                types.identifier('libraryName'),
                types.stringLiteral('vant')
              ),

              types.objectProperty(
                types.identifier('esModule'),
                types.booleanLiteral(true)
              ),

              types.objectProperty(
                types.identifier('resolveStyle'),
                types.arrowFunctionExpression(
                  [types.identifier('name')],
                  // ======
                  // types.blockStatement([])
                  types.templateLiteral([
                    types.templateElement(
                      { raw: '../es/', cooked: '../es' },
                      false
                    ),
                    types.templateElement(
                      { raw: 'style/index', cooked: 'style/index' },
                      true
                    )
                  ])
                )
              )
            ])
          ])
        )
      ])
    ])
  )
  return str
}

console.log(generate.default(createStyleImport()))
