const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require('../middle')

console.log('---middle---');

assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);