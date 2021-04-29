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

// Our map function will take in two arguments:
// An array to map & a callback function

/* The map function will return a new array based
on the results of the callback function. */

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["goofy", "citrus", "to", "massive", "tomato"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

assertArraysEqual(['g', 'c', 't', 'm', 't'], results1); //should PASS
assertArraysEqual([], results1); // should FAIL
assertArraysEqual(results2, results1); // should PASS
assertArraysEqual(['g'.toUpperCase(), 'c', 't', 'm', 't'], results1); // should FAIL