const { assertArraysEqual } = require("./eqArrays.js");

//Arrays with 0, 1 or 2 elements have no middle
//Arrays that are even should return the 2 middle elements
//Arrays that are odd should return the middle most element

const middle = (array) => {
  // let newArray = [];
  // const middle = Math.floor(array.length / 2);
  // console.log(array.length, middle);

  // if (array.length <= 2) {
  //   return []
  // } else if (array.lenth % 2 === 0) {
  //   return [array[middle - 2], array[middle - 1]];
  // } else {
  //   return [array[middle]]; 
  // }
  const middle = Math.floor(array.length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middle]];
  } else {
    return [array[middle - 1], array[middle]];
  }
}

assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);