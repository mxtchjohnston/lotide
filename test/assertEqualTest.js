const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log('---assertEqual---');
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual([1, 2], [1, 2]);
assertEqual([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
assertEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]]);