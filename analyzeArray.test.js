const analyzeArray = require("./analyzeArray");

test("Empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0
  });
});
test("Array with single item [5]", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});
test("[1, 8, 3, 4, 2, 6] -> { average: 4, min: 1, max: 8, length: 6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
