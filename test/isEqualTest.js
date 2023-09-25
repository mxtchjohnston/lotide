const isEqual = require('../isEqual');

const obj = {a: 1, b: true, c: ['hello', 'world']};
const obj2 = {c: ['hello','world'], a: 1, b: true};

const combined = {first: obj, second: obj2};
console.log('---isEqual---')
console.log(isEqual(obj, obj2));
console.log(isEqual(combined, combined));