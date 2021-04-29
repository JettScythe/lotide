const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  // scan object
  for (const key in object) {
    // return first key for which the callback returns a truthy value
    // If no key is found, then it should return undefined.
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual('noma', findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma" should PASS

assertEqual('Ora', findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma" should FAIL

assertEqual('Blue Hill', findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1)); // => "Blue Hill" should PASS

assertEqual(undefined, findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "elBulli":   { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "undefined" should PASS