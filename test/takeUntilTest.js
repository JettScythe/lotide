const takeUntil = require('../takeUntil');
const {assert} = require('chai');

describe('#takeUntil', () => {
  it('should ', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual([ "I've", 'been', 'to', 'Hollywood' ], results2)
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual([1,2,5,7,2], results1);
  })
})