const add = (a, b) => a + b;

test('should add to numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
