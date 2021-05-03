const map = require('../map');
const {assert} = require('chai');

describe('#map', () => {
  it('should equal', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(['g', 'c', 't', 'm', 't'], results1);
  });
  it('should not equal', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.notDeepEqual([], results1);
  });

  it('should equal', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const words2 = ["goofy", "citrus", "to", "massive", "tomato"];
    const results1 = map(words, word => word[0]);
    const results2 = map(words2, word => word[0]);
    assert.deepEqual(results1, results2);
  });
});
