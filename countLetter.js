const countLetters = (str) => {
  const results = {};
  for (const char of str) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};


console.log(countLetters('Hello with some spaces'));
module.exports = countLetters;
