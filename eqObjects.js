const { assertEqual } = require('./assertEqual.js');
const { isEqual } = require('./eqArrays.js');

const eqObjects = (obj1, obj2) => {
  let entries1 = Object.entries(obj1);
  let entries2 = Object.entries(obj2);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (let [key, value] of entries1) {
    if (!isEqual(obj2[key], value)) {
      return false;
    }
  }
  return true;
};

exports.eqObjects = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

let nested1 = {
  name: "john",
  wardrobe: shirtObject
};

let nested2 = {
  name: "john",
  wardrobe: longSleeveShirtObject,
  age: 87
};
// assertEqual(eqObjects(nested1, nested1), true);
// assertEqual(eqObjects(nested1, nested2), false);