const eqObjects = require('../eqObjects');
const { assert, expect } = require('chai');

describe('#eqObjects', () => {
  it('should return true when objects are equal', () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  })

  it('should return false when objects are not equal', () => {
    assert.isFalse(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
    assert.isFalse(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  })
});