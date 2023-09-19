const isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    // Handle arrays by comparing their elements
    if (value1.length !== value2.length) {
      return false;
    }

    for (let i = 0; i < value1.length; i++) {
      //recurses to check multidimensional values
      if (!isEqual(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  } else {
    // Handle scalar values by direct comparison
    return value1 === value2;
  }
};

const assertArraysEqual = function(actual, expected) {
  let passed = isEqual(actual, expected);

  if (passed) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

exports.assertArraysEqual = assertArraysEqual;
exports.isEqual = isEqual;