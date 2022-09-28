let core = require('@babel/core')

let types = require('@babel/types')

module.exports = {
  astViteConfigIsInit() {
    let isExit = true
    let transformClassPlugin = {
      visitor: {
        ExportDefaultDeclaration(path) {
          try {
            let types  = path.node.declaration.arguments[0].type
            if (types === 'ArrowFunctionExpression') {
              isExit = true
            }
          } catch (error) {
            isExit = false
          }
        }
      }
    }
    core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return isExit
  },
  /******* 
   * @description: 使用ast在vite.config.ts中增加elemnet的ui引入
   */  
  astViteConfigAddElementPlus(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        Program(path) {
          // 添加依赖包的引入
          let methods = path.node.body
          let astCode = types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('elementPlus'))],
            types.stringLiteral('unplugin-element-plus/vite')
          )
          methods.splice(1, 0, astCode)
        },
        ExportDefaultDeclaration(path) {

          let properties  = path.node.declaration.arguments[0].body.properties
          
          let currentProperties
          properties.forEach(item => {
            
            if (item.key.name === 'plugins') {
              currentProperties = item
            }
          })
          

          if (!currentProperties) {
           let currentObject =  types.objectProperty(types.identifier('plugins'),  types.arrayExpression([]))
           currentProperties = currentObject
           properties.push(currentObject)
          }
          
          let pluginsList = currentProperties.value.elements
          pluginsList.push(
            types.callExpression(types.identifier('elementPlus'), [])
          )
          
          
          // let arrowFunction = path.node.declar
        }
      }
    }
    let targetSource = core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return targetSource.code
  },
  astViteConfigRemoveConsole(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        ExportDefaultDeclaration(path) {
          let properties  = path.node.declaration.arguments[0].body.properties
          
          let currentProperties
          properties.forEach(item => {
            
            if (item.key.name === 'build') {
              currentProperties = item
            }
          })
          
          if (!currentProperties) {
           let currentObject =  types.objectProperty(types.identifier('build'), types.objectExpression([]))
           currentProperties = currentObject
           properties.push(currentObject)
          }
          const buildList = currentProperties.value.properties
          console.log('buildList', buildList);
          // 判断是否存在minify属性
          if (
            properties.findIndex(
              (item) => item.key.name === 'minify'
            ) === -1
          ) {
            let objectProperty = types.objectProperty(
              types.identifier('minify'),
              types.stringLiteral('terser')
            )
            buildList.push(objectProperty)
          }

          if (
            properties.findIndex(
              (item) => item.key.name === 'terserOptions'
            ) === -1
          ) {
            let objectProperty = types.objectProperty(
              types.identifier('terserOptions'),
              types.objectExpression([])
            )
            buildList.push(objectProperty)
          }
          // 解析terserOptions属性的相关内容
          buildList.forEach((terserOption) => {
            if (terserOption.key.name === 'terserOptions') {
              let terserOptionList = terserOption.value.properties
              // 进入了terserOptions中了， 判断是否有compress属性
              if (
                terserOptionList.findIndex(
                  (item) => item.key.name === 'compress'
                ) === -1
              ) {
                let objectProperty = types.objectProperty(
                  types.identifier('compress'),
                  types.objectExpression([])
                )
                terserOptionList.push(objectProperty)
              }
              console.log('进入了compress')
              ;` 此时变成了code为:
                build: {
                  terserOptions: {
                    compress: {}
                  }
                },
              `
              terserOptionList.forEach((compress) => {
                if (compress.key.name === 'compress') {
                  let compressList = compress.value.properties
                  // 是否有drop_console属性
                  if (
                    compressList.findIndex(
                      (item) => item.key.name === 'drop_console'
                    ) === -1
                  ) {
                    let objectProperty = types.objectProperty(
                      types.identifier('drop_console'),
                      types.logicalExpression(
                        '&&',
                        types.binaryExpression(
                          '===',
                          types.identifier('command'),
                          types.stringLiteral('build')
                        ),
                        types.binaryExpression(
                          '===',
                          types.memberExpression(
                            types.callExpression(
                              types.identifier('loadEnv'),
                              [
                                types.identifier('mode'),
                                types.identifier('__dirname')
                              ]
                            ),
                            types.identifier('VITE_API_ENV')
                          ),
                          types.stringLiteral('prod')
                        )
                      )
                    )
                    compressList.push(objectProperty)
                  }
                  // 是否有drop_debugger属性
                  if (
                    compressList.findIndex(
                      (item) => item.key.name === 'drop_debugger'
                    ) === -1
                  ) {
                    let objectProperty = types.objectProperty(
                      types.identifier('drop_debugger'),
                      types.logicalExpression(
                        '&&',
                        types.binaryExpression(
                          '===',
                          types.identifier('command'),
                          types.stringLiteral('build')
                        ),
                        types.binaryExpression(
                          '===',
                          types.memberExpression(
                            types.callExpression(
                              types.identifier('loadEnv'),
                              [
                                types.identifier('mode'),
                                types.identifier('__dirname')
                              ]
                            ),
                            types.identifier('VITE_API_ENV')
                          ),
                          types.stringLiteral('prod')
                        )
                      )
                    )
                    compressList.push(objectProperty)
                  }
                }
              })
              // 此时变成了terserOptions: {
              //   compress: {}
              // }
              // compress中增加去除console的代码
            }
          })

          // let methods =currentProperties.value
          // methods.forEach((method) => {
          //   if (method.key.name === 'build') {
          //     let buildList = method.value.properties
              
          //   }
          // })
        }
      }
    }

    let targetSource = core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return targetSource.code
  },
  astViteConfigAddSvgLoader(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        Program(path) {
          // 添加依赖包的引入
          let methods = path.node.body
          let astCode = types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('svgLoader'))],
            types.stringLiteral('vite-svg-loader')
          )
          methods.splice(1, 0, astCode)
        },
        ObjectExpression(path) {
          let methods = path.node.properties
          methods.forEach((method) => {
            if (method.key.name === 'plugins') {
              let pluginsList = method.value.elements
              pluginsList.push(
                types.callExpression(types.identifier('svgLoader'), [])
              )
            }
          })
        }
      }
    }

    let targetSource = core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return targetSource.code
  }
}
