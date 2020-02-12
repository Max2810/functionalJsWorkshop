function countWords(inputWords) {
  return inputWords.reduce(
    function countRepeatWord(counts, word) {
      counts[word] = counts[word] ? counts[word] + 1 : 1;
      return counts
    }, {});
}

module.exports = countWords;