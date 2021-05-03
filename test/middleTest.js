const middle = require('../middle');
const { assert, expect } = require('chai');

//TESTS
describe('#middle', () => {
  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });

  it('should return [3, 4] when comparing middle([1, 2, 3, 4, 5, 6]) and middle([12, 3, 4, 99])', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    const result1 = middle([12, 3, 4, 99]);
    expect(result).to.deep.equal(result1);
  });
  
  it('should return false when comparing arrays with unmatched data types', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6]), [true, 4]);
  });

  it('should return false when comparing arrays with unmatched middles', () => {
    assert.notDeepEqual(middle([1, 2, 'hello', 4, 5, 6]), [3, 4]);
  });
});