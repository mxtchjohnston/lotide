const toExport = [
  'head',
  'tail',
  'middle'
];

toExport.forEach(elem => module.exports[elem] = require(`./${elem}.js`));