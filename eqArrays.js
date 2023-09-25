const isEqual= require("./isEqual.js");

const assertArraysEqual = function(actual, expected) {
  let passed = isEqual(actual, expected);

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
