const capitalize = require('./capitalize');

test('Capitalize ayman to become Ayman', () => {
  expect(capitalize('ayman')).toBe('Ayman');
});
test('Capitalize aymaN to become AymaN', () => {
  expect(capitalize('aymaN')).toBe('AymaN');
});
test('Capitalize AYMAN to become AYMAN', () => {
  expect(capitalize('AYMAN')).toBe('AYMAN');
});