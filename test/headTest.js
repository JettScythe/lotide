const { assert } = require('chai');
const head = require('../head');

describe('#head', () => {
  it('Should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('should return hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
});