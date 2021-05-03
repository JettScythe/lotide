const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TESTS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([12, 3, 4, 99]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [true, 4]);
assertArraysEqual(middle([1, 2, 'hello', 4, 5, 6]), [3, 4]);