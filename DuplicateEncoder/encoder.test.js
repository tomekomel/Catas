const duplicateEncode = require('./encoder');

test('test', () => {
  expect(duplicateEncode("din")).toBe("(((");
});
test('test', () => {
  expect(duplicateEncode("recede")).toBe("()()()");
});
test('test', () => {
  expect(duplicateEncode("Success")).toBe(")())())");
});
test('test', () => {
  expect(duplicateEncode("(( @")).toBe("))((");
});
