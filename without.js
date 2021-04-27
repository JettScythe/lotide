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

const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let val of source){
    if(!itemsToRemove.includes(val)){
      newArr.push(val)
    }
  }
  console.log(newArr);
}; 

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


const without2 = (source, itemsToRemove) => {
  let newArr = source.filter( val => !itemsToRemove.includes(val))
  console.log(newArr);
}

without2([1, 2, 3], [1]) // => [2, 3]
without2(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words2 = ["hello", "world", "lighthouse"];
without2(words2, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words2, ["hello", "world", "lighthouse"]);