const Calculator = require('../Calculator');
const chai = require('chai');

const { expect } = chai;
const cal1 = new Calculator();

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

function itShouldBeZero() {
  expect(cal1.calculate('')).to.be.equal(0);
}

function itShouldBeNumber() {
  const x = Math.floor(Math.random() * 10000);
  expect(typeof cal1.calculate(x)).to.be.equal('number');
  expect(cal1.calculate(x)).to.be.equal(x);
}

function itShouldBeSum() {
  expect(cal1.calculate('1,2')).to.be.equal(3);
  expect(cal1.calculate('1\n2')).to.be.equal(3);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be zero', itShouldBeZero);
  it('should be number', itShouldBeNumber);
  it('should be sum', itShouldBeSum);
}

// Start Describe
describe('Example', exampleBehaviors);
