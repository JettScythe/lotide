const flatten = require('../flatten');
const {assert} = require('chai');

describe('#flatten', () => {
  it('should deep equal array', () => {
    const array =  [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), array);
  });
});