/****************************************************************
Write a function hipsterfy(sentence) that takes takes a string
containing several words as input. Remove the last vowel from
each word. 'y' is not a vowel.

> hipsterfy("proper");
"propr"

> hipsterfy("proper tonic panther");
"propr tonc panthr"

> hipsterfy("towel flicker banana");
"towl flickr banan"

> hipsterfy("runner anaconda");
"runnr anacond"

> hipsterfy("turtle cheeseburger fries");
"turtl cheeseburgr fris"
****************************************************************/

function isVowel(letter) {
	vowels = ["a", "e", "i", "o", "u"];
	if (vowels.indexOf(letter) >= 0) {
		return true;
	} else {
		return false;
	}
}

function hipsterfy(sentence) {
  var splitLowerSentence = sentence.toLowerCase().split(" ");
  var newSentence = [];
  for (word = 0; word < splitLowerSentence.length; word++) {
  	var splitWord = splitLowerSentence[word].split("");
  	var newWord = [];
  	var removedVowelCount = 0;
  	//console.log(splitWord);
  	for (var i = splitWord.length - 1; i >= 0; i--){
  		var nextLetterFromEnd = splitWord[i];
  		if (!(isVowel(nextLetterFromEnd) && removedVowelCount === 0)) {
  			newWord.unshift(nextLetterFromEnd);
  		} else {
  			removedVowelCount += 1;
  		}
  	}
  	newWord = newWord.join("");
  	newSentence.push(newWord);
  }
  newSentence = newSentence.join(" ");
  console.log(newSentence);
}

hipsterfy("proper");
//"propr"
hipsterfy("proper tonic panther");
//propr tonc panthr"
hipsterfy("towel flicker banana");
//"towl flickr banan"
hipsterfy("runner anaconda");
//"runnr anacond"
hipsterfy("turtle cheeseburger fries");
//"turtl cheeseburgr fris"
