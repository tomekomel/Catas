function findUniq(arr) {
  var numberOccurance = {};

  arr.forEach(function (item) {
    numberOccurance[item] = numberOccurance[item] + 1 || 1;
  });

  return Number(
    Object.entries(numberOccurance).find(([key, value]) => value === 1)[0]
  );
}

module.exports = findUniq;
