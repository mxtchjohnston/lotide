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

if (process.argv[2] === 'test') { 
  assertEqual("Lighthouse Labs", "Lighthouse Labs");
  assertEqual(1, 1);
  assertEqual([1, 2], [1, 2]);
  assertEqual([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
  assertEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]]);
}

module.exports = assertEqual;