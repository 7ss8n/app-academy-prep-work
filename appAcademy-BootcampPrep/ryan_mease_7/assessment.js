/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n.

Use Array#forEach.

Examples:
countAdjacentSums([1, 5, 1], 6) => 2
countAdjacentSums([7, 2, 4, 6], 7) => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3
******************************************************************************/
function countAdjacentSums(arr, n){
  var correctSumCount = 0;
  arr.forEach(function(ele, i) {
    if (arr[i-1]) {
        if ((arr[i-1] + arr[i]) === n) {
        correctSumCount++;
      }
    }
  });
  return correctSumCount;
}

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

  for (var i = 0; i < splitString.length; i++) {
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

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonants, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples:
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowels, just add "yay" to the end
  Examples:
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitalized must remained caplitalized
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/
function isVowel(letter) {
  var lowercaseLetter = letter.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(lowercaseLetter) >= 0) {
    return true;
  } else {
    return false;
  }
}

function isCapitalized(word) {
  var lowerWord = word.toLowerCase();
  var firstLetterLower = lowerWord.substring(0,1);
  return (word.substring(0,1) === firstLetterLower.toUpperCase());
}

function capitalize(word) {
  var lowerWord = word.toLowerCase();
  var capitalizedWord = lowerWord.substring(0,1).toUpperCase() + lowerWord.substring(1);
  return capitalizedWord;
}

function pigify(word) {
  if (!(isVowel(word.substring(0,1)))) {

      var firstVowelIndex = -1;
      for(i = 0; i < word.length; i++) {
        var character = word.charAt(i);
        if (isVowel(character)) {
          firstVowelIndex = i;
          break;
        }
      }
      var newWord = word.substring(firstVowelIndex,word.length) + word.substring(0, firstVowelIndex) + "ay";
    } else {
      var newWord = word + "yay";
    }
    if (isCapitalized(word)) { //per AZ comments, moved this portion out of the if/else block
      // to simplify the program
        newWord = capitalize(newWord);
      }
    return newWord;
}

function inPigLatin(sentence){
  var splitSentence = sentence.split(" ");
  var pigSentence = [];

  for (word = 0; word < splitSentence.length; word++) {
    var nextWord = splitSentence[word];
    pigSentence.push(pigify(nextWord));
  }
  return pigSentence.join(" ");
}

// var test4 = inPigLatin("Shmanthony is the best teacher");
// var test5 = inPigLatin("let us Dance");
// var test6 = inPigLatin("this is the time of my life")

// console.log(test4);
// console.log(test5);
// console.log(test6);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  countAdjacentSums : countAdjacentSums,
  longestLetterStreak : longestLetterStreak
};
