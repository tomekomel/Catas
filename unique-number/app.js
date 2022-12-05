function findUniq(arr) {
    var numberOccurance = {};

    for (var i = 0; i < arr.length; i++) {
        if (numberOccurance[arr[i]] === undefined) {
            numberOccurance[arr[i]] = 0;
        }
        numberOccurance[arr[i]]++;
    }

    return Number(Object.entries(numberOccurance).find(([key, value]) => value === 1)[0]);
}

module.exports = findUniq;
