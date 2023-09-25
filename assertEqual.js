const { isEqual } = require('./isEqual.js');
const inspect = require('util').inspect;

const assertEqual = function(actual, expected) {
  let passed = isEqual(actual, expected);

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertEqual;