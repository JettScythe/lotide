const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (val === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
