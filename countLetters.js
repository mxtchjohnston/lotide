const { assertEqual } = require('./assertEqual.js');

const countLetters = (string) => {
  let arrChar = string.split("");
  let countObject = {};

  for (let char of arrChar) {
    if (countObject.hasOwnProperty(char)) {
      countObject[char] += 1;
    } else {
      countObject[char] = 1;
    }
  }
  //console.log(countObject);
  return countObject;
}

let counted = countLetters("the quick brown fox sleeps zzzzzzz");

assertEqual(counted['z'], 7);