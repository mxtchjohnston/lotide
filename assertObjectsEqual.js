const { eqObjects } = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  let passed = eqObjects(actual, expected);
  const inspect = require('util').inspect;

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({color: "red", type: "shirt"}, {type: "shirt", color: "red"});
assertObjectsEqual({color: "red", type: "shirt"}, {type: "shirt", color: "red", brand: "addidas"}); //will fail