const without = (source, itemsToRemove) => {
  let newArr = source.filter(val => !itemsToRemove.includes(val));
  return newArr;
};
module.exports = without;

