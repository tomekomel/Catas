var globalTen = 10;
var sum;

function method() {
  var hundred = 100;

  sum = function(a, b) {
    return a + b + globalTen + hundred;
  }

  hundred = 10000;
}

method();

console.log('Result: ' + sum(1, 2));
