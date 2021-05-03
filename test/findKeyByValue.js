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
  })
})