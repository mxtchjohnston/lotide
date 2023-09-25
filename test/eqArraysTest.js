const assertArraysEqual = require('../eqArrays');

console.log('---eqArrays---');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true