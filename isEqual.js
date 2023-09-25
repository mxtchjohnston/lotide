const eqVal = (val1, val2) => val1 === val2;

const eqArray = (val1, val2) => {
  if (val1.length !== val2.length) {
    return false;
  }

  for (let i = 0; i < val1.length; i++) {
    //recurses to check multidimensional values
    if (!isEqual(val1[i], val2[i])) {
      return false;
    }
  }
  return true;
};

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



const isEqual = (val1, val2) => {
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    if (Array.isArray(val1) && Array.isArray(val2)) {
      return eqArray(val1, val2);
    } else {
      return eqObjects(val1, val2);
    }
  } else {
    return eqVal(val1, val2);
  }
};

module.exports = isEqual;