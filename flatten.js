const { assertArraysEqual } = require("./eqArrays");

const flatten = function(array) {
  let flatArray = [];

  //console.log("given array", array);
  for (let elem of array) {
    if (Array.isArray(elem)) {
      //console.log("Is array", elem);
      flatArray = flatArray.concat(flatten(elem));
      //console.log("array after recursive call", flatArray)
    } else {
      //console.log("is elem", elem);
      flatArray.push(elem);
    }
  }
  return flatArray;
}

console.log(flatten([1, 2, 3, [4, 5, [6]]]))