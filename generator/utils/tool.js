class Tool {
  firstUpperCase(value) {
    return value.replace(/^\S/, (s) => s.toUpperCase())
  }
}

module.exports = Tool
