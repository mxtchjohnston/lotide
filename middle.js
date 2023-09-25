

//Arrays with 0, 1 or 2 elements have no middle
//Arrays that are even should return the 2 middle elements
//Arrays that are odd should return the middle most element

const middle = (array) => {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;