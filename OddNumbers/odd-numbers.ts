export function rowSumOddNumbers(n: number) {
  if (n === 1) {
    return 1;
  }

  const firstNumberInRow: number = n * (n - 1) + 1;
  let sum: number = firstNumberInRow;
  let currentOddNumber: number = firstNumberInRow;

  for (let i = 2; i <= n; i++) {
    currentOddNumber += 2;
    sum += currentOddNumber;
  }

  return sum;
}
