var next, prev, rewind;

(function() {
  var data = ['volvo', 'audi', 'bmw', 'mercedes', 'citroen'];
  var current = -1;

  next = function () {
    if (current < data.length - 1) {
      current++;
    }
    return data[current];
  }

  prev = function () {
    if (current > 0) {
      current--;
    }
    return data[current];
  }

  rewind = function () {
    current = -1;
  }
})();

console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(prev());
console.log(prev());
console.log(prev());
console.log(prev());
console.log(prev());
console.log(prev());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
rewind();
console.log(next());
