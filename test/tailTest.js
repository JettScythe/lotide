const tail = require('../tail');
const { assert, expect } = require('chai');

describe('#tail', () => {
  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3)
  });

  it('should be equal when comparing function to expected result', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});