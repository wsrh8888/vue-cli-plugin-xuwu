let types = require('@babel/types')
let core = require('@babel/core')
const AST = require('./ast')
const astCommon = require('./viteConfig/viteCommon')
const compatibility = require('./viteConfig/compatibility')

class ViteConfigAst extends AST {
  /*******
   * @description: vite.config.ts是否需要初始化
   */
  astViteConfigIsInit(sourceCode) {
    let isExit = true
    let transformClassPlugin = {
      visitor: {
        ExportDefaultDeclaration(path) {
          isExit = compatibility.viteIsInit(path)
        }
      }
    }
    core.transform(sourceCode, {
      plugins: [transformClassPlugin]
    })
    return isExit
  }
  /*******
   * @description: 使用ast在vite.config.ts中增加elemnet的ui引入
   */
  astViteConfigAddElementPlus(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigAddElementPlus,
        astCommon.viteConfigAddElementPlugin
      ])
    )
  }
  /*******
   * @description: 使用ast在vite.config.ts中增加alias的配置
   */
  astVite3ConfigAddAlias(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigHeaderNodeUrl,
        astCommon.vite3ConfigBodyPath
      ])
    )
  }
  /*******
   * @description: 使用ast在vite.config.ts中增加alias的配置
   */
  astViteConfigAddAlias(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigHeaderPath,
        astCommon.viteConfigBodyPath
      ])
    )
  }
  astViteConfigRemoveConsole(sourceCode) {
    let transformClassPlugin = {
      visitor: {
        CallExpression(path) {
          let properties = compatibility.callExpression(path)
          if (!properties.length) {
            return
          }
          let currentProperties
          properties.forEach((item) => {
            if (item.key.name === 'build') {
              currentProperties = item
            }
          })

          if (!currentProperties) {
            let currentObject = types.objectProperty(
              types.identifier('build'),
              types.objectExpression([])
            )
            currentProperties = currentObject
            properties.push(currentObject)
          }
          const buildList = currentProperties.value.properties
          // 判断是否存在minify属性
          if (
            properties.findIndex((item) => item.key.name === 'minify') === -1
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
                      types.binaryExpression(
                        '===',
                        types.identifier('command'),
                        types.stringLiteral('build')
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
                      types.binaryExpression(
                        '===',
                        types.identifier('command'),
                        types.stringLiteral('build')
                      )
                    )
                    compressList.push(objectProperty)
                  }
                }
              })
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
  astViteConfigVisualizer(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigHeaderVisualizer,
        astCommon.viteConfigBodyVisualizer
      ])
    )
  }
  astViteConfigVitePluginUni(source) {
    return this.writeAst(
      source,

      this.getAstCoreList([
        astCommon.viteConfigBodyVitePluginUni,
        astCommon.viteConfigHeaderVitePluginUni
      ])
    )
  }
  /**
   * @description: 在vite.config.ts中增加vue()插件
   */
  astViteConfigAddVue(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigBodyAddVue,
        astCommon.viteConfigHeaderAddVue
      ])
    )
  }
  /**
   * @description: 在vite.config.ts中增加svgLoader()插件
   */
  astViteConfigAddSvgLoader(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigBodyAddSvgLoader,
        astCommon.viteConfigHeaderAddSvgLoader
      ])
    )
  }
  astViteConfigAddBaseUrl(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConifAddParams,
        astCommon.viteConfigChangeBase,
        astCommon.viteConfigContentAddBaseUrl
      ])
    )
  }
  astViteConfigAddStyleImportant(source) {
    return this.writeAst(
      source,
      this.getAstCoreList([
        astCommon.viteConfigHeaderStyleImportant,
        astCommon.viteConfigBodyStyleImportant
      ])
    )
  }
}

module.exports = new ViteConfigAst()
