function analyzeArray(arr) {
  let obj = {
    average: null,
    min: null,
    max: null,
    length: arr.length
  };
  if (arr.length === 0) {
    return obj;
  }
  obj.average = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj;
}

module.exports = analyzeArray;