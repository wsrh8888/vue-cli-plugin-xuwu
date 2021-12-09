const Template = require("../static/template");
const Xuwu = require("../utils/xuwu");
const Fs = require("fs");
const { EOL } = require("os");
class BabelConfig {
  api = Xuwu.getApi();
  options = Xuwu.getOption();

  init() {
    try {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      let lines = contentMain.split(/\r?\n/g);
      if (
        lines.findIndex((line) =>
          line.match(/plugins/)
        ) === -1
      ) {
        console.log("2222");
        throw Error;
      }
    } catch (error) {
      this.api.render({
        "/babel.config.js": "../template/vite.config.js",
      });
    }
  }
  /**
   * @description: babelConfig.js文件中添加去掉console相关配置
   * @param {*}
   * @return {*}
   */
  babelConfigRemoveConsole() {
    this.init();
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (
        lines.findIndex((line) => line.match(/transform-remove-console/)) === -1
      ) {
        lines[renderIndex - 1] += `${EOL} ${Template.reoveConsoleTemplate()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
  /**
   * @description: babelConfig.js文件Element按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddElementPlus() {
    this.init();
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (lines.findIndex((line) => line.match(/element-plus/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.elementPlusTemplate()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
  /**
   * @description: babelConfig.js文件Element按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddElement() {
    this.init();
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (lines.findIndex((line) => line.match(/element-ui/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.elementTemplate()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
  /**
   * @description: babelConfig.js文件AntDesign按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddAntDesign() {
    this.init()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (lines.findIndex((line) => line.match(/ant-design-vue/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.antDesignTemplate()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
  /**
   * @description: babelConfig.js文件VantVue2按需引入配置
   * @param {*}
   * @return {void}
   */
  babelConfigAddVant() {
    this.init();

    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (lines.findIndex((line) => line.match(/vant/)) === -1) {
        lines[renderIndex - 1] += `${EOL}  ${Template.vantTemplate()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
  /**
   * @description: babelConfig.js配置Es6转为es5
   * @param {*}
   * @return {*}
   */
  babelConfigEs6ToEs5() {
   this.init()
    this.api.afterInvoke(() => {
      let contentMain = Fs.readFileSync(this.api.resolve("./babel.config.js"), {
        encoding: "utf-8",
      });
      lines = contentMain.split(/\r?\n/g);
      const renderIndex = lines.findIndex((line) =>
        line.match(/module.exports/)
      );
      if (
        lines.findIndex((line) => line.match(/transform-class-properties/)) ===
        -1
      ) {
        lines[renderIndex - 1] += `${EOL}  ${Template.es6ToEs5Template()}`;
        Fs.writeFileSync("./babel.config.js", lines.join(EOL), {
          encoding: "utf-8",
        });
      }
    });
  }
}

module.exports = BabelConfig;
