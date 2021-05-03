const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (val === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), 5);