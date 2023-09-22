const { assertEqual } = require('./assertEqual.js');

const countLetters = (string) => {

  let countObject = {};
  //for of loops work with strings
  for (let char of string) {
    if (char === " ") {
      continue;
    }

    if (!countObject[char]) {
      countObject[char] = 0;
    }

    countObject[char]++;
  }
  //console.log(countObject);
  return countObject;
};

let counted = countLetters("the quick brown fox sleeps zzzzzzz");

assertEqual(counted['z'], 7);