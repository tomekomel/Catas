function disemvowel(str) {
  var vowels = 'aeiouAEIOU';
  var result = '';

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }

  return result;
}

module.exports = disemvowel;
