/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

// myForEach([5,12,-3], function(ele, i, arr){
//   console.log(ele + " is at position " + i + " in array " + arr);
// })

/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback. This
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
function mySelect (arr, cb) {
  selected = [];

  myForEach(arr, function(ele, i, arr) {
    if (cb(ele, i, arr)) {
      selected.push(ele);
    }
  });
  return selected;
}

// var test2 = mySelect([5,12,-22,-3], function(ele, i, arr){
//   return ele % 2 === 0;
// })

// var test3 = mySelect([5,12,-22,-3], function(ele, i, arr){
//   return i % 2 === 0;
// })

// console.log(test3);

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitailzed must remained caplitailzed
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
  firstLetterLower = lowerWord.substring(0,1);
  return (word.substring(0,1) === firstLetterLower.toUpperCase());
}

function capitalize(word) {
  var lowerWord = word.toLowerCase();
  var capitalizedWord = lowerWord.substring(0,1).toUpperCase() + lowerWord.substring(1);
  return capitalizedWord;
}

function pigify(word) {
  if (!(isVowel(word.substring(0,1)))) { //first character is consonant

      firstVowelIndex = -1;
      for(i = 0; i < word.length; i++) {
        var character = word.charAt(i);
        if (isVowel(character)) {
          firstVowelIndex = i;
          break;
        }
      }
      newWord = word.substring(firstVowelIndex,nextWord.length) + word.substring(0, firstVowelIndex) + "ay";

      if (isCapitalized(word)) {
        newWord = capitalize(newWord);
      }
      return newWord;

    } else {
      newWord = word + "yay";
      if (isCapitalized(word)) {
        newWord = capitalize(newWord);
      }
      return newWord;
    }
}

function inPigLatin(sentence){
  splitSentence = sentence.split(" ");
  pigSentence = [];

  for (word = 0; word < splitSentence.length; word++) {
    nextWord = splitSentence[word];
    pigSentence.push(pigify(nextWord));
  }
  return pigSentence.join(" ");
}

var test4 = inPigLatin("Shmanthony is the best teacher");
var test5 = inPigLatin("let us Dance");
var test6 = inPigLatin("this is the time of my life")

// console.log(test4);
// console.log(test5);
// console.log(test6);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  mySelect : mySelect,
  myForEach : myForEach,
  inPigLatin : inPigLatin
};