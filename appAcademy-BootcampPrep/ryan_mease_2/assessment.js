/******************************************************************************
** Write a function royalWe(sentence) that returns an string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

function royalWe(sentence){
	
	splitSentence = sentence.split(" ");

	var newSentence = [];

	for (var word_index = 0; word_index < splitSentence.length; word_index++) {
		if (splitSentence[word_index] === "I") {
			newSentence.push("we");
		} else if (splitSentence[word_index] === "mine") {
			newSentence.push("ours");
		} else if (splitSentence[word_index] === "My") {
			newSentence.push("Our");
		} else if (splitSentence[word_index] === "my") {
			newSentence.push("our");
		} else if (splitSentence[word_index] === "me") {
			newSentence.push("us");
		} else {
			newSentence.push(splitSentence[word_index]);
		}
	}

	newSentence = newSentence.join(" ");
	return newSentence;

}

// var test1 = royalWe("This is ours");
// console.log(test1)

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){

	var elementCountObject = {};

	for (var element_index = 0; element_index < array.length; element_index++) {

		if (elementCountObject[array[element_index]] === undefined) {

			elementCountObject[array[element_index]] = 1;

		} else {

			elementCountObject[array[element_index]] += 1;

		}

	}

	return elementCountObject;

}

// var test2 = ["a", "a", "b", "b"];
// console.log(elementCount(test2));

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.
** Don't use Array#reverse.
** Examples:
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){

	var reverseRangeArray = [];

	if (start < end) {

		for (var i = (end-1); i > start; i--) {

				reverseRangeArray.push(i);

		}

	}

	return reverseRangeArray;

}

// var test3 = reverseRange(2,7);
// console.log(test3);

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){

	splitSentence = sentence.split(" ");
	var newSentence = [];

	for (var word = splitSentence.length-1; word >= 0; word--) {

		newSentence.push(splitSentence[word]);

	}

	return newSentence.join(" ");

}

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){

	var magicNumbersArray = [];

	for (var i = 0; i < max; i++) {

		if ((i % 4 === 0 || i % 6 === 0) && (!(i % 4 === 0 && i % 6 === 0))) {

			magicNumbersArray.push(i);

		}

	}

	return magicNumbersArray;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
