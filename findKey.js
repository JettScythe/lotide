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
module.exports = findKey;