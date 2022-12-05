const chai = require("chai");
const findUniq = require('./app');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
