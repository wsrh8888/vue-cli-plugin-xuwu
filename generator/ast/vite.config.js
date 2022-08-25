let core = require('@babel/core')

let types = require('@babel/types')

module.exports = {
  viteConfigRemoveConsole(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        ObjectExpression(path) {
          let methods = path.node.properties
          methods.forEach((method) => {
            if (method.key.name === 'build') {
              let buildList = method.value.properties
              if (
                buildList.findIndex(
                  (item) => item.key.name === 'terserOptions'
                ) === -1
              ) {
                let objectProperty = types.objectProperty(
                  types.identifier('terserOptions'),
                  types.objectExpression([])
                )
                buildList.push(objectProperty)
              }
              console.log('进入了build')
              // 解析terserOptions属性的相关内容
              buildList.forEach((terserOption) => {
                if (terserOption.key.name === 'terserOptions') {
                  console.log('进入了terserOptions')

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
                        console.log('12312312312312')

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
              // return 'minify: "terser",
              // terserOptions: { compress:
              // { drop_console: command === "build" && loadEnv(mode, __dirname).VITE_API_ENV === "prod",
              // drop_debugger: command === "build" && loadEnv(mode, __dirname).VITE_API_ENV === "prod"}}'

              // let objectExpression = types.objectProperty(types.identifier('path'), types.stringLiteral('newRoute.path'))
              // method.value.properties.push(objectExpression)
            }
          })
        }
      }
    }
    console.log('sourceCode', sourceCode)

    let targetSource = core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return targetSource.code
  }
}
