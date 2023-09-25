const assertEqual = require('../assertEqual');
const head = require('../head');


console.log('---head---');
assertEqual(head([1,2,3]), 1);
assertEqual(head([true, false]), true);

console.log('---assertEqual---');
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual([1, 2], [1, 2]);
assertEqual([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
assertEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]]);

