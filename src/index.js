module.exports = function longestConsecutiveLength(array) {
  if (array.length < 2) {
    return array.length;
  }
  let result = 1,
      count = 1;
  array = array.sort((a, b) => a - b);
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] === (array[i] - 1)) {
      count++;
    } else if (array[i - 1] !== (array[i])) {
      count = 1
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
}