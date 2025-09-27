function reverseString(str) {
  let result = '';
  for (char of str) {
    result = char + result;
  }
  return result;
}

module.exports = reverseString;