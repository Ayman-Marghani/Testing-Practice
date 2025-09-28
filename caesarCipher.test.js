const caesarCipher = require('./caesarCipher');

test('Shift xyz by 3 -> abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('Shift HeLLo by 3 -> KhOOr', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('Shift Hello, World! by 3 -> Khoor, Zruog!', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});