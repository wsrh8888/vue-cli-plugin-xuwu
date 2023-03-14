let types = require('@babel/types')
const compatibility = require('./compatibility')
class ViteConfigAstCommon {
  /*******
   * @description: 给vite增加loadEnv属性
   */
  viteConfigAddloadEnv() {
    return {
      ImportDeclaration(path) {
        if (path.node.source.value !== 'vite') {
          return
        }
        // 判断是否找到loadEnv属性
        let isExitLoadEnv = false
        path.node.specifiers.forEach((item) => {
          if (item.imported.name === 'loadEnv') {
            isExitLoadEnv = true
          }
        })
        if (!isExitLoadEnv) {
          path.node.specifiers.push(
            types.importSpecifier(
              types.identifier('loadEnv'),
              types.identifier('loadEnv')
            )
          )
        }
      }
    }
  }
  /*******
   * @description: 给vite增加unplugin-element-plus 头文件
   */
  viteConfigAddElementPlus() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === 'unplugin-element-plus/vite'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        let astCode = types.importDeclaration(
          [types.importDefaultSpecifier(types.identifier('elementPlus'))],
          types.stringLiteral('unplugin-element-plus/vite')
        )
        bodys.splice(1, 0, astCode)
      }
    }
  }
  /*******
   * @description: 给声明方法增加mode和command参数
   */
  viteConifAddParams() {
    return {
      ExportDefaultDeclaration(path) {
        let childrenItem = compatibility.exportArgument(path)
        if (!childrenItem.params.length) {
          return
        }
        childrenItem.params = [
          types.objectPattern([
            types.objectProperty(
              types.identifier('mode'),
              types.identifier('mode'),
              false,
              true
            ),
            types.objectProperty(
              types.identifier('command'),
              types.identifier('command'),
              false,
              true
            )
          ])
        ]
      }
    }
  }
  /*******
   * @description: 将vite中base的value值替换为baseUrl()
   */
  viteConfigChangeBase() {
    return {
      CallExpression(path) {
        let childrenList = compatibility.callExpression(path)
        if (!childrenList.length) {
          return
        }
        let childrenLength = childrenList.length
        childrenList.forEach((item, index) => {
          if (item.key.name === 'base') {
            childrenLength = index
          }
        })
        childrenList[childrenLength] = types.objectProperty(
          types.identifier('base'),
          types.callExpression(types.identifier('baseUrl'), [
            types.objectExpression([
              types.objectProperty(
                types.identifier('mode'),
                types.identifier('mode'),
                false,
                true
              ),
              types.objectProperty(
                types.identifier('command'),
                types.identifier('command'),
                false,
                true
              )
            ])
          ])
        )
      }
    }
  }
  /*******
   * @description: 在vite的plugin增加element的包
   */
  viteConfigAddElementPlugin() {
    return {
      CallExpression(path) {
        let properties = compatibility.callExpression(path)
        if (!properties.length) {
          return
        }
        let currentProperties
        properties.forEach((item) => {
          if (item.key.name === 'plugins') {
            currentProperties = item
          }
        })
        if (!currentProperties) {
          let currentObject = types.objectProperty(
            types.identifier('plugins'),
            types.arrayExpression([])
          )
          currentProperties = currentObject
          properties.push(currentObject)
        }

        let pluginsList = currentProperties.value.elements
        pluginsList.push(
          types.callExpression(types.identifier('elementPlus'), [
            types.objectExpression([])
          ])
        )

        // let arrowFunction = path.node.declar
      }
    }
  }
  /*******
   * @description: 在vite的plugin增加visualizer的导入
   */
  viteConfigHeaderVisualizer() {
    return {
      Program(path) {
        //       // 添加依赖包的引入
        let methods = path.node.body
        let astCode = types.importDeclaration(
          [
            types.importSpecifier(
              types.identifier('visualizer'),
              types.identifier('visualizer')
            )
          ],
          types.stringLiteral('rollup-plugin-visualizer')
        )
        methods.splice(1, 0, astCode)
      }
    }
  }
  /*******
   * @description: 在vite的plugin增加visualizer的包
   */
  viteConfigBodyVisualizer() {
    return {
      CallExpression(path) {
        let properties = compatibility.callExpression(path)
        if (!properties.length) {
          return
        }

        let currentProperties
        properties.forEach((item) => {
          if (item.key.name === 'plugins') {
            currentProperties = item
          }
        })

        if (!currentProperties) {
          let currentObject = types.objectProperty(
            types.identifier('plugins'),
            types.arrayExpression([])
          )
          currentProperties = currentObject
          properties.push(currentObject)
        }

        let pluginsList = currentProperties.value.elements
        pluginsList.push(
          types.callExpression(types.identifier('visualizer'), [])
        )

        // let arrowFunction = path.node.declar
      }
    }
  }
  viteConfigHeaderNodeUrl() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === 'node:url'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [
              types.importSpecifier(
                types.identifier('fileURLToPath'),
                types.identifier('fileURLToPath')
              ),
              types.importSpecifier(
                types.identifier('URL'),
                types.identifier('URL')
              )
            ],
            types.stringLiteral('node:url')
          )
        )
      }
    }
  }
  viteConfigHeaderPath() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === 'path'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('path'))],
            types.stringLiteral('path')
          )
        )
      }
    }
  }
  viteConfigHeaderVitePluginUni() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === '@dcloudio/vite-plugin-uni'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('uni'))],
            types.stringLiteral('@dcloudio/vite-plugin-uni')
          )
        )
      }
    }
  }

  /*******
   * @description: 在vite头文件中增加vue
   */
  viteConfigHeaderAddVue() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === '@vitejs/plugin-vue'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('vue'))],
            types.stringLiteral('@vitejs/plugin-vue')
          )
        )
      }
    }
  }
  viteConfigHeaderAddReact() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === '@vitejs/plugin-react'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('react'))],
            types.stringLiteral('@vitejs/plugin-react')
          )
        )
      }
    }
  }

  /*******
   * @description: 在vite头文件中增加SvgLoader
   */
  viteConfigHeaderAddSvgLoader() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false
        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === 'vite-svg-loader'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('svgLoader'))],
            types.stringLiteral('vite-svg-loader')
          )
        )
      }
    }
  }
  vite3ConfigBodyPath() {
    return {
      CallExpression(path) {
        let methods = compatibility.callExpression(path)
        if (!methods.length) {
          return
        }
        let resolveIndex = -1
        methods.forEach((method, resolveKey) => {
          if (method.key.name === 'resolve') {
            resolveIndex = resolveKey
          }
        })

        // 判断vite.config.ts是否有resolve:{}对象
        if (resolveIndex === -1) {
          methods.push(
            types.objectProperty(
              types.identifier('resolve'),
              types.objectExpression([])
            )
          )
          resolveIndex = methods.length - 1
        }

        // resolve添加完毕
        let resolves = methods[resolveIndex].value.properties
        let aliasIndex = -1
        resolves.forEach((method, index) => {
          if (method.key.name === 'alias') {
            aliasIndex = index
          }
        })
        // 判断是否有alias对象
        if (aliasIndex === -1) {
          resolves.push(
            types.objectProperty(
              types.identifier('alias'),
              types.objectExpression([])
            )
          )
          aliasIndex = resolves.length - 1
        }
        let alias = resolves[aliasIndex].value.properties
        alias.push(
          types.objectProperty(
            types.stringLiteral('@'),
            types.callExpression(types.identifier('fileURLToPath'), [
              types.newExpression(types.identifier('URL'), [
                types.stringLiteral('./src'),
                types.memberExpression(
                  types.metaProperty(
                    types.identifier('import'),
                    types.identifier('meta')
                  ),
                  types.identifier('url')
                )
              ])
            ])
          )
        )
      }
    }
  }
  /**
   * @description: 在body中增加alias相关配置内容
   */
  viteConfigBodyPath() {
    return {
      CallExpression(path) {
        let methods = compatibility.callExpression(path)
        if (!methods.length) {
          return
        }
        let resolveIndex = -1
        methods.forEach((method, resolveKey) => {
          if (method.key.name === 'resolve') {
            resolveIndex = resolveKey
          }
        })

        // 判断vite.config.ts是否有resolve:{}对象
        if (resolveIndex === -1) {
          methods.push(
            types.objectProperty(
              types.identifier('resolve'),
              types.objectExpression([])
            )
          )
          resolveIndex = methods.length - 1
        }
        // resolve添加完毕
        let resolves = methods[resolveIndex].value.properties
        let aliasIndex = -1
        resolves.forEach((method, index) => {
          if (method.key.name === 'alias') {
            aliasIndex = index
          }
        })
        // 判断是否有alias对象
        if (aliasIndex === -1) {
          resolves.push(
            types.objectProperty(
              types.identifier('alias'),
              types.objectExpression([])
            )
          )
          aliasIndex = resolves.length - 1
        }
        let alias = resolves[aliasIndex].value.properties
        alias.push(
          types.objectProperty(
            types.stringLiteral('@'),
            types.callExpression(
              types.memberExpression(
                types.identifier('path'),
                types.identifier('resolve')
              ),
              [types.identifier('__dirname'), types.stringLiteral('./src')]
            )
          )
        )
      }
    }
  }
  viteConfigBodyVitePluginUni() {
    return {
      ObjectExpression(path) {
        let methods = path.node.properties
        methods.forEach((method) => {
          if (method.key.name === 'plugins') {
            let pluginsList = method.value.elements
            pluginsList.push(types.callExpression(types.identifier('uni'), []))
          }
        })
      }
    }
  }

  /*******
   * @description: 在body中增加vue相关内容
   */
  viteConfigBodyAddVue() {
    return {
      ObjectExpression(path) {
        let methods = path.node.properties
        methods.forEach((method) => {
          if (method.key.name === 'plugins') {
            let pluginsList = method.value.elements
            pluginsList.push(types.callExpression(types.identifier('vue'), []))
          }
        })
      }
    }
  }
  viteConfigBodyAddReact() {
    return {
      ObjectExpression(path) {
        let methods = path.node.properties
        methods.forEach((method) => {
          if (method.key.name === 'plugins') {
            let pluginsList = method.value.elements
            pluginsList.push(
              types.callExpression(types.identifier('react'), [])
            )
          }
        })
      }
    }
  }
  /*******
   * @description: 在body中增加SvgLoader相关内容
   */
  viteConfigBodyAddSvgLoader() {
    return {
      CallExpression(path) {
        let methods = compatibility.callExpression(path)
        if (!methods.length) {
          return
        }
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
  viteConfigHeaderStyleImportant() {
    return {
      Program(path) {
        // 添加依赖包的引入
        let bodys = path.node.body
        let isEnd = false

        bodys.forEach((body) => {
          if (
            body.type === 'ImportDeclaration' &&
            body.source.value === 'vite-plugin-style-import'
          ) {
            isEnd = true
          }
        })
        if (isEnd) {
          return
        }
        bodys.splice(
          1,
          0,
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('styleImport'))],
            types.stringLiteral('vite-plugin-style-import')
          )
        )
      }
    }
  }
  viteConfigContentAddBaseUrl() {
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
          if (body.type === 'ExportDefaultDeclaration') {
            moduleExportsIndex = index
          }
        })
        if (isEnd) {
          return
        }
        let astCode = types.functionDeclaration(
          types.identifier('baseUrl'),
          [
            types.objectPattern([
              types.objectProperty(
                types.identifier('mode'),
                types.identifier('mode'),
                false,
                true
              ),
              types.objectProperty(
                types.identifier('command'),
                types.identifier('command'),
                false,
                true
              )
            ])
          ],

          types.blockStatement([
            // 第二行
            // types.variableDeclaration('const', [
            //   types.variableDeclarator(
            //     types.identifier('env'),
            //     types.callExpression(types.identifier('loadEnv'), [
            //       types.identifier('mode'),
            //       types.identifier('command')
            //     ])
            //   )
            // ]),
            // 第三行
            types.variableDeclaration('let', [
              types.variableDeclarator(
                types.identifier('base'),
                types.stringLiteral('./')
              )
            ]),
            //第四行
            types.ifStatement(
              types.logicalExpression(
                '&&',
                types.binaryExpression(
                  '===',
                  types.identifier('command'),
                  types.stringLiteral('build')
                ),
                types.binaryExpression(
                  '===',
                  types.identifier('mode'),
                  types.stringLiteral('test')
                )
              ),
              // 第五行
              types.blockStatement([
                types.expressionStatement(
                  types.assignmentExpression(
                    '=',
                    types.identifier('base'),
                    types.stringLiteral('./')
                  )
                )
              ]),
              // 第六行
              types.ifStatement(
                types.logicalExpression(
                  '&&',
                  types.binaryExpression(
                    '===',
                    types.identifier('command'),
                    types.stringLiteral('build')
                  ),
                  types.binaryExpression(
                    '===',
                    types.identifier('mode'),
                    types.stringLiteral('prod')
                  )
                ),
                // 第七行
                types.blockStatement([
                  types.expressionStatement(
                    types.assignmentExpression(
                      '=',
                      types.identifier('base'),
                      types.stringLiteral('./')
                    )
                  )
                ]),
                // 第八行
                types.blockStatement([
                  //第九行
                  types.expressionStatement(
                    types.assignmentExpression(
                      '=',
                      types.identifier('base'),
                      types.stringLiteral('./')
                    )
                  )
                ])
              )
            ),

            // return 行
            types.returnStatement(types.identifier('base'))
          ])
        )
        bodys.splice(moduleExportsIndex, 0, astCode)
      }
    }
  }
  viteConfigBodyStyleImportant() {
    return {
      ObjectExpression(path) {
        let methods = path.node.properties
        methods.forEach((method) => {
          if (method.key.name === 'plugins') {
            let pluginsList = method.value.elements
            pluginsList.push(
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
                            types.templateLiteral(
                              [
                                types.templateElement(
                                  { raw: '../es/', cooked: '../es' },
                                  false
                                ),
                                types.templateElement(
                                  {
                                    raw: '/style/index',
                                    cooked: '/style/index'
                                  },
                                  true
                                )
                              ],
                              [types.identifier('name')]
                            )
                          )
                        )
                      ])
                    ])
                  )
                ])
              ])
            )
          }
        })
      }
    }
  }
}

module.exports = new ViteConfigAstCommon()
