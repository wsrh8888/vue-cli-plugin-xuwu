module.exports = {
  firstUpperCase(value) {
    return value.replace(/^\S/, (s) => s.toUpperCase())
  },
  isNumber(value) {
    return typeof value === 'number'
  }
}
