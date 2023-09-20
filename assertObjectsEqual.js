const { eqObjects } = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  let passed = eqObjects(actual, expected);

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual({color: "red", type: "shirt"}, {type: "shirt", color: "red"});
assertObjectsEqual({color: "red", type: "shirt"}, {type: "shirt", color: "red", brand: "addidas"}); //will fail