const assert = require('chai').assert;
const middle = require('../middle')

describe('#middle', () => {
  it('[1, 2] => []', () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it('[1, 2, 3, 4, 5] => [3]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('[1, 2, 3, 4, 5, 6] => [3, 4]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});