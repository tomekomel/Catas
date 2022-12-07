const Test = require("@codewars/test-compat");
const invert = require("./app");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
assert.deepEqual(invert([]), []);
assert.deepEqual(invert([0]), [-0]);
