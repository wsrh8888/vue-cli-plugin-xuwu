// const core = require('@babel/core')
const types = require('@babel/types')
// const generate = require('@babel/generator')

// eslint-disable-next-line no-unused-vars
function viteConfigBaseUrl() {
  let baseurl = types.functionDeclaration(
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
      types.variableDeclaration('const', [
        types.variableDeclarator(types.identifier('env'))
      ])
    ])
  )

  return baseurl
}

// [
//   types.objectPattern([
//     types.objectProperty(types.identifier('mode'))
//   ])
// ],

// console.log(generate.default(viteConfigBaseUrl()))
