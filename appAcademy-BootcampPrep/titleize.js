function titleize(title, stopWords) {
	var splitTitle = title.split(" ");
	var newTitle = [];
	for (var word_index = 0; word_index < splitTitle.length; word_index++) {
		var currentWord = splitTitle[word_index].toLowerCase();
		if (stopWords.indexOf(currentWord) < 0) {
			var newWord = currentWord[0].toUpperCase()
			if (currentWord.length > 1) {
				newWord += currentWord.substring(1, currentWord.length);
			}
			currentWord = newWord;
		}
		newTitle.push(currentWord);
	}

	return newTitle.join(" ");
}

console.log(titleize("shall we dance?", ["dance"]))