const { assertEqual } = require("./assertEqual.js");

const tail = function(array) {
  return array.slice(1);
};

assertEqual(tail([1,2,3]), [2, 3]);
assertEqual(tail([true, false]), false); //list of flase vs. scalar false