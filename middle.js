const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

//TESTS
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([12, 3, 4, 99]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [true, 4]);
assertArraysEqual(middle([1, 2, 'hello', 4, 5, 6]), [3, 4]);