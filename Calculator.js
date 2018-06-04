class Calculator {
  constructor() {
    this.str = '';
  }

  calculate(str) {
    this.str = str;
    if (str === '') return 0;
    else if (typeof str === 'number') return str;
    else if (str.indexOf(',') !== -1) return Number(str.split(',')[0]) + Number(str.split(',')[1]);
    else if (str.indexOf('\n') !== -1) return Number(str.split('\n')[0]) + Number(str.split('\n')[1]);
    return -1;
  }
}

module.exports = Calculator;
