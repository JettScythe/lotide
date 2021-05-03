const letterPositions = (sentence)  => {
  const results = {};
  // logic to update results here
  // return all the indices in the string where each character is found.
  for (let i = 0; i < sentence.length; i++) {
    //ignore spaces
    if (sentence[i] !== ' ') {
      // check if array doesn't exist
      if (!results[sentence[i]]) {
        // create array & assign
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

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

console.log(letterPositions("Lighthouse in the house"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);