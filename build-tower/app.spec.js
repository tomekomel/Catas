const chai = require("chai");
const assert = chai.assert;

const towerBuilder = require("./app");

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));

assert.equal(towerBuilder(1), ["*"]);
assert.equal(towerBuilder(2), [" * ", "***"]);
assert.equal(towerBuilder(3), ["  *  ", " *** ", "*****"]);
