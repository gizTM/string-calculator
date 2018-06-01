class Calculator {
  constructor() {
    this.str = '';
  }
  calculate(str) {
    this.str = str;
    return this.str.length;
  }
}

module.exports = Calculator;
