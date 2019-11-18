function duplicateEncode(word) {
  const preparedWord = word.toLowerCase();
  let encodedString = [];

  for(const letter of preparedWord) {
    encodedString.push(letterOccurrenceInWord(letter, preparedWord) > 1 ? ')' : '(');
  }

  return encodedString.join('');
}

function letterOccurrenceInWord(letter, word) {
  let occurrence = 0;

  for (const currentLetter of word) {
    if (currentLetter === letter) {
      occurrence++;
    }
  }

  return occurrence;
}

module.exports = duplicateEncode;
