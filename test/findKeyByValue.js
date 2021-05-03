const findKeyByValue = require('../findKeyByValue');
const {assert} = require('chai');

describe('#findKeyByValue', () => {
  it('should return equal', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('should not be equal', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.notEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
    assert.notEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");
    assert.notEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");
    assert.notEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), 5);
  })
});