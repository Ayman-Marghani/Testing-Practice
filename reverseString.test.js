const reverseString = require('./reverseString');

test('reverse string of ayman is namya', () => {
  expect(reverseString('ayman')).toBe('namya');
});
test('Reverse string of ayman1 is 1namya', () => {
  expect(reverseString('ayman1')).toBe('1namya');
});
test('Reverse string of a is a', () => {
  expect(reverseString('a')).toBe('a');
});
test('Reverse string of empty string is empty string', () => {
  expect(reverseString('')).toBe('');
});