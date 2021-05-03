const without = require('../without');
const {assert} = require('chai');

describe('#without', () => {
  it('should not modify the original array', () => {
    const words2 = ["hello", "world", "lighthouse"];
    without(words2, ["lighthouse"]);
    assert.deepEqual(words2, ["hello", "world", "lighthouse"]);
    without([1, 2, 3], [1]); // => [2, 3]
    without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
  });
});