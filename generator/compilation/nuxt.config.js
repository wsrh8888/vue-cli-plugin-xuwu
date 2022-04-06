const Xuwu = require('../utils/xuwu')
const Template = require('../static/template')
// const Fs = require('fs')
// const { EOL } = require('os')

class NuxtConfig {
  api = Xuwu.getApi()
  options = Xuwu.getOption()

  nuxtConfigRemoveConsole() {
    this.api.afterInvoke(() => {
      const fs = require('fs')
      const { EOL } = require('os')
      const contentVueConfig = fs.readFileSync(
        this.api.resolve('./nuxt.config.js'),
        {
          encoding: 'utf-8'
        }
      )
      const configLines = contentVueConfig.split(/\r?\n/g)
      const configIndex = configLines.findIndex((line) =>
        line.match(/export default/)
      )
      const buildIndex = configLines.findIndex((line) => line.match(/build:/))
      // 获取
      if (
        configLines.findIndex((line) =>
          line.match(/transform-remove-console/)
        ) === -1
      ) {
        configLines[configIndex] =
          `${EOL} const plugins = [];  ${Template.reoveConsoleTemplate()}` +
          configLines[configIndex]
        let startIndex = configLines[buildIndex].indexOf('{')

        configLines[buildIndex] =
          configLines[buildIndex].slice(0, startIndex + 1) +
          ' babel: { plugins: plugins}' +
          configLines[buildIndex].slice(startIndex + 1)
        fs.writeFileSync('./nuxt.config.js', configLines.join(EOL), {
          encoding: 'utf-8'
        })
      }
    })
  }
  nuxtConfigInitEnv() {
    this.api.afterInvoke(() => {
      const fs = require('fs')
      const { EOL } = require('os')
      const contentVueConfig = fs.readFileSync(
        this.api.resolve('./nuxt.config.js'),
        {
          encoding: 'utf-8'
        }
      )
      const configLines = contentVueConfig.split(/\r?\n/g)
      const configIndex = configLines.findIndex((line) =>
        line.match(/export default/)
      )
      let plugins = ''
      if (
        configLines.findIndex((line) => line.match(/const process /)) === -1
      ) {
        plugins = "const process = require('process');"
      }
      // 获取
      if (configLines.findIndex((line) => line.match(/env: /)) === -1) {
        configLines[configIndex] = `${EOL} ${plugins}
        ${configLines[configIndex]}
        env: {
          API_ENV: process.env.API_ENV
        },`
        // fs.writeFileSync('./nuxt.config.js', configLines.join(EOL), {
        //   encoding: 'utf-8'
        // })
      }
    })
  }
  nuetConfigAddVconsole() {
    this.api.afterInvoke(() => {
      const fs = require('fs')
      // const { EOL } = require('os')
      const contentVueConfig = fs.readFileSync(
        this.api.resolve('./nuxt.config.js'),
        {
          encoding: 'utf-8'
        }
      )
      console.log('eeeee', contentVueConfig)

      const startIndex = contentVueConfig.indexOf('export default')

      let data = contentVueConfig.slice(startIndex + 'export default'.length)
      // const data = JSON.parse(data)
      let json = new Function('return ' + contentVueConfig)()
      console.log(json)

      data.plugins.push({ src: '~/plugins/vconsole', ssr: false })

      console.log('data', data)

      // contentVueConfig.replace(contentVueConfig.substring(0, startIndex + 'export default'.length) , data.toString())
      // const configLines = contentVueConfig.split(/\r?\n/g)
      // const configIndex = configLines.findIndex((line) =>
      //   line.match(/export default/)
      // )
      // const buildIndex = configLines.findIndex((line) => line.match(/build:/))
      // // 获取
      // if (
      //   configLines.findIndex((line) =>
      //     line.match(/transform-remove-console/)
      //   ) === -1
      // ) {
      //   configLines[configIndex] =
      //     `${EOL} const plugins = [];  ${Template.reoveConsoleTemplate()}` +
      //     configLines[configIndex]
      //   let startIndex = configLines[buildIndex].indexOf('{')

      //   configLines[buildIndex] =
      //     configLines[buildIndex].slice(0, startIndex + 1) +
      //     ' babel: { plugins: plugins}' +
      //     configLines[buildIndex].slice(startIndex + 1)
      // fs.writeFileSync('./nuxt.config.js', configLines.join(EOL), {
      //   encoding: 'utf-8'
      // })
      // }
    })
  }
}

module.exports = NuxtConfig
