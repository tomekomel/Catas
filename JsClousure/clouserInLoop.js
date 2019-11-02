var functions = [];

function definer() {
  for (i = 0; i < 5; i++) {
    functions.push(function () {
      return i;
    })
  }
}

definer();

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
console.log(functions[3]());
console.log(functions[4]());
