const takeUntil = (array, callback) => {
  let results = [];
  for (const num of array) {
    if (callback(num) === true) {
      break;
    } else {
      results.push(num);
    }
  }
  return results;
};

module.exports = takeUntil;
