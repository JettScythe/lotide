const countLetters = require('../countLetter');
const { assert, expect } = require('chai');

describe('#countLetter', () => {
  it('should return an object with the count for each letter as the key:value pair', () => {
    assert.deepEqual(countLetters('Hello with some spaces'), {
      H: 1,
      e: 3,
      l: 2,
      o: 2,
      w: 1,
      i: 1,
      t: 1,
      h: 1,
      s: 3,
      m: 1,
      p: 1,
      a: 1,
      c: 1
    });
  });
});