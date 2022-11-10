let types = require('@babel/types')

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
        console.log('bodys', bodys)

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
        if (path.node.declaration.callee.name !== 'defineConfig') {
          return
        }
        let childrenItem = path.node.declaration.arguments[0]
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
      ExportDefaultDeclaration(path) {
        if (path.node.declaration.callee.name !== 'defineConfig') {
          return
        }
        let childrenList = path.node.declaration.arguments[0].body.properties
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
      ExportDefaultDeclaration(path) {
        let properties = path.node.declaration.arguments[0].body.properties
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
          types.callExpression(types.identifier('elementPlus'), [])
        )

        // let arrowFunction = path.node.declar
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
        console.log('bodys', bodys)

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
  /*******
   * @description: 在body中增加SvgLoader相关内容
   */
  viteConfigBodyAddSvgLoader() {
    return {
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
}

module.exports = new ViteConfigAstCommon()
