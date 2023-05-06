const Xuwu = require('../../utils/xuwu')

class Compatibility {
  /*******
   * @description: 判断vite.config.ts写法是否标准
   */
  viteIsInit(path) {
    if (Xuwu.getBuildToolName() === 'vite4') {
      try {
        let currentTypes = path.node.declaration.type
        if (currentTypes === 'ArrowFunctionExpression') {
          return true
        } else {
          return false
        }
      } catch (error) {
        return false
      }
    } else {
      try {
        let currentTypes = path.node.declaration.arguments[0].type
        if (currentTypes === 'ArrowFunctionExpression') {
          return true
        } else {
          return false
        }
      } catch (error) {
        return false
      }
    }
  }
  /*******
   * @description: 获取defineConfig的参数list
   */
  callExpression(path) {
    if (Xuwu.getBuildToolName() === 'vite4') {
      if (path.node.callee.name !== 'defineConfig') {
        return []
      }
      return path.node.arguments[0].properties
    } else {
      return path.node.declaration.arguments[0].body.properties
    }
  }
  exportArgument(path) {
    if (Xuwu.getBuildToolName() === 'vite4') {
      if (
        path?.node?.declaration?.body[0] &&
        path?.node?.declaration?.body[0]['callee'] &&
        path?.node?.declaration?.body[0].callee?.name === 'defineConfig'
      ) {
        return {
          params: {}
        }
      }
      return path.node.declaration
    } else {
      if (path.node.declaration.callee.name !== 'defineConfig') {
        return []
      }
      return path.node.declaration.arguments[0]
    }
  }
}

module.exports = new Compatibility()
