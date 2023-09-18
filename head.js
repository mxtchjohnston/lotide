const { assertEqual } = require("./assertEqual.js");

const head = function(array) {
  return array[0];
};

assertEqual(head([1,2,3]), 1);
assertEqual(head([true, false]), 'hi');