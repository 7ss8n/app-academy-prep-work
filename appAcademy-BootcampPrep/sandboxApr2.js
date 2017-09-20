/******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Examples:
longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5
******************************************************************************/
function longestLetterStreak(str, searchLetters){

	var splitString = str.split("");
	var streakTracker = [];
	var streakCount = 0;

	for (i = 0; i < splitString.length; i++) {
		var nextLetter = splitString[i];
		if (searchLetters.indexOf(nextLetter) >= 0) {
			streakCount += 1;
		} else {
			streakTracker.push(streakCount);
			streakCount = 0;
		}
	}

	streakTracker.push(streakCount);

	// console.log(streakTracker);
	// console.log(streakCount);

	var longest = longestStreakSelector(streakTracker);
	return longest;

	

}

function longestStreakSelector(arr) {

	var longest = 0;

	arr.forEach(function(ele) {
		if (ele > longest) {
			longest = ele;
		}
	});

	return longest;

}



var test1 = longestLetterStreak("ACCA", ["C"]) //=> 2
var test2 = longestLetterStreak("YACCADCA", ["C", "A"]) //=> 4
var test3 = longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) //=> 3
var test8 = longestLetterStreak("YYYYY", ["Z", "K", "Y"]) //=> 5

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test8);

