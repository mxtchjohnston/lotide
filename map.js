const map = (array, func) => {
  result = [];

  for (let entry of array) {
    result.push(func(entry));
  }

  return result;
}

const test = [1, 2, 3, 4, 5];

console.log("Before:", test);
console.log("After * 2", map(test, x => x * 2));