const letterPositions = require('../letterPositions');
const {assert} = require('chai');

describe('#letterPositions', () => {
  it('should return letter positions of 2, 3 when given (hello).l', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});