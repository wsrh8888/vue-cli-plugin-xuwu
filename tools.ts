class Main {
  api: number = 20
  options: number = 20
  static single: Main
  constructor(api: number, options: number) {
    this.api = api
    this.options = options
  }
  static getTestMain2(api?: number, options?: number) {
    if (this.single === undefined && api && options) {
      this.single = new Main(api, options)
    }
    return this.single
  }
}
class Utils {
  test() {
    console.log(Main.getTestMain2(1, 3), '333')
  }
}

// let data = Main.getTestMain2(100,100)
let utils = new Utils()
utils.test()
console.log(Main.getTestMain2(1, 3), '555')
