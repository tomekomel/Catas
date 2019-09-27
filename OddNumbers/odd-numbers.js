"use strict";
exports.__esModule = true;
function rowSumOddNumbers(n) {
    if (n === 1) {
        return 1;
    }
    var firstNumberInRow = n * (n - 1) + 1;
    var sum = firstNumberInRow;
    var currentOddNumber = firstNumberInRow;
    for (var i = 2; i <= n; i++) {
        currentOddNumber += 2;
        sum += currentOddNumber;
    }
    return sum;
}
exports.rowSumOddNumbers = rowSumOddNumbers;
