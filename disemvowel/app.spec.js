const Test = require("@codewars/test-compat");
const disemvowel = require("./app");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

assert.strictEqual(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
assert.strictEqual(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
assert.strictEqual(
  disemvowel("What are you, a communist?"),
  "Wht r y,  cmmnst?"
);
