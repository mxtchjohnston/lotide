const { assertArraysEqual, isEqual } = require("./eqArrays.js");

const without = function(source, toRemove) {
  let newArray = [];
  for(let i = 0; i < source.length; i++) {
    if (!toRemove.some((elem) => elem === source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

let arr1 = [1,2,3];
let arr2 = [2,3];
let arr3 = [1];
let arr4 = ["hi", "2"];

assertArraysEqual(without(arr1,arr2), arr3);

exports.without = without;