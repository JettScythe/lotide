const findKeyByValue = require('../findKeyByValue');
const {assert} = require('chai');

describe('#findKeyByValue', () => {
  it('should return equal', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");
    // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), 5);
  })
})