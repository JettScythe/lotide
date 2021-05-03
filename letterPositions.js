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
