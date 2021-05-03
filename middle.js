//For arrays with one or two elements, there is no middle. Return an empty array.

/* For arrays with odd number of elements, an array
containing a single middle element should be returned. */

/* For arrays with an even number of elements, an array
containing the two elements in the middle should be returned */

const middle = (arr) => {
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      return arr.slice((middleIndex - 1), (middleIndex + 1));
    } else {
      return ([middleIndex + 1]);
    }
  } else {
    return [];
  }
};

module.exports = middle;