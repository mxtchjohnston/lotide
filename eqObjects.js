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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);