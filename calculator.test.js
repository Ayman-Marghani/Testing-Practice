const calculator = require('./calculator');

const newCalc = new calculator();

// Test add 
test('2 + 30 = 32', () => {
  expect(newCalc.add(2, 30)).toBe(32);
});

test('5 + (-7) = -2', () => {
  expect(newCalc.add(5, -7)).toBe(-2);
});

test('5 + 0 = 5', () => {
  expect(newCalc.add(5, 0)).toBe(5);
});

// Test subtract 
test('15 - 0 = 15', () => {
  expect(newCalc.subtract(15, 0)).toBe(15);
});
test('30 - 2 = 28', () => {
  expect(newCalc.subtract(30, 2)).toBe(28);
});
test('5 - (-7) = 12', () => {
  expect(newCalc.subtract(5, -7)).toBe(12);
});
test('5 - (20) = -15', () => {
  expect(newCalc.subtract(5, 20)).toBe(-15);
});
test('0 - 5 = -5', () => {
  expect(newCalc.subtract(0, 5)).toBe(-5);
});

// Test divide 
test('0 / 2 = 0', () => {
  expect(newCalc.divide(0, 2)).toBe(0);
});
test('5 / 0 = undefined', () => {
  expect(newCalc.divide(5, 0)).toBeUndefined();
});
test('3 / 1 = 3', () => {
  expect(newCalc.divide(3, 1)).toBe(3);
});
test('-30 / -2 = 15', () => {
  expect(newCalc.divide(-30, -2)).toBe(15);
});
test('-7 / 2 = -3.5', () => {
  expect(newCalc.divide(-7, 2)).toBeCloseTo(-3.5);
});
test('9 / 4 = 2.25', () => {
  expect(newCalc.divide(9, 4)).toBeCloseTo(2.25);
});

// Test multiply 
test('0 * 2 = 0', () => {
  expect(newCalc.multiply(0, 2)).toBe(0);
});
test('1 * 5 = 5', () => {
  expect(newCalc.multiply(1, 5)).toBe(5);
});
test('7 * -4 = -28', () => {
  expect(newCalc.multiply(7, -4)).toBe(-28);
});
test('-90 * -3 = 270', () => {
  expect(newCalc.multiply(-90, -3)).toBe(270);
});
