const { without } = require('./without.js');
const { assertArraysEqual } = require("./eqArrays");

const countLetters = (string) => {
  let arrChar = without(string.split(""), [' ']);
  let countObject = {};
  
  arrChar.forEach((element, index) => {
    if (countObject.hasOwnProperty(element)) {
      countObject[element].push(index);
    } else {
      countObject[element] = [index];
    }
  });

  //console.log(countObject);
  return countObject;
}

const ans = countLetters("Welcome to the jungle");

assertArraysEqual(ans['e'], [1, 6, 11, 17]);