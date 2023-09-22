const { isEqual } = require('./isEqual.js');

const assertEqual = function(actual, expected) {
  let passed = isEqual(actual, expected);

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1, 2], [1, 2]);
assertEqual([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
assertEqual([[1, 2], [3, 4]], [[1, 2], [3, 5]]);

exports.assertEqual = assertEqual;