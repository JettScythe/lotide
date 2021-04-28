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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Size = Object.keys(object1).length;
  let object2Size = Object.keys(object2).length;
  if (object1Size !== object2Size) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);