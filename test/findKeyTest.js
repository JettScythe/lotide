const findKey = require('../findKey');
const {assert} = require('chai');

describe('#findKey', () => {
  it('Should return first key for which the callback returns a truthy value', () => {
    assert.deepEqual('noma', findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2))
  })

  it('should return undefined if no key is found', () => {
    assert.deepEqual(undefined, findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "elBulli":   { stars: 3 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2))
  })
})