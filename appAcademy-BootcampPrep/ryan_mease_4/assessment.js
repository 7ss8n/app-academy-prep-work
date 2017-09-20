/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects). DO NOT USE
** Array.prototype.indexOf
** Examples:
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, element){
  var myIndex = -1; //default, assuming element is not found. 
  for (var index = 0; index <= array.length; index++) {
    if (array[index] === element) {
      myIndex = index;
      break;
    }
  }
  return myIndex;
}

// var test1 = myIndexOf([1,2,3,4,5], 5);
// var test2 = myIndexOf(["a", "b", "c"], "a");
// var test3 = myIndexOf(["a", "b", "c"], "d");

// console.log(test1);
// console.log(test2);
// console.log(test3);

/******************************************************************************
** Write a function minMaxProduct(array) that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Examples:
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){
  var biggestNumber = Math.max.apply(null, array); //only used this after reading Mozilla docs
  var smallestNumber = Math.min.apply(null, array); // ""
  return (biggestNumber * smallestNumber);
}

// var test4 = minMaxProduct([0,1,2,3,4,5]); // 0
// var test5 = minMaxProduct([5,4,3,2,1]); // 5
// var test6 = minMaxProduct([4,2,5,1,-5]); // -25

// console.log(test4);
// console.log(test5);
// console.log(test6);

/******************************************************************************
** Write a function leastCommonMultiple(num1, num2) that returns the
** lowest number which is a multiple of both inputs.
** Examples:
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2){
  var smallerNumber = Math.min(num1, num2);
  var largerNumber = Math.max(num1, num2);
  var multiple = smallerNumber;

  while(true) {
    if (multiple % largerNumber === 0) {
      return multiple;
    }
    multiple += smallerNumber;
  }
}

// var test7 = leastCommonMultiple(2, 3); // 6
// var test8 = leastCommonMultiple(6, 10); // 30
// var test9 = leastCommonMultiple(24, 26); // 312

// console.log(test7);
// console.log(test8);
// console.log(test9);

/***************************************************************************
** Write a function arraysSumN(ary, n) which takes as ary a 2-dimensional
** array and as n a number. ary is an array of arrays of numbers. The
** function returns a new array of the inner arrays whose elements sum to n.
** Example 1:
** var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
** var results1 = arraysSumN(ary1, 1);
** results1; // => [ [0, 1], [3, -2] ]
**
** Example 2:
** var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
** arraysSumN(ary2, 6); // => [ [3, 2, 1], [6] ]
***************************************************************************/

function arraysSumN(ary, n) {
  var correctSum = n;
  var correctSumArray = [];
  for (var subArray = 0; subArray < ary.length; subArray++) {
    var subArraySum = 0;
    for (var index = 0; index < ary[subArray].length; index++) {
      subArraySum += ary[subArray][index];
    }
    if (subArraySum === correctSum) {
      correctSumArray.push(ary[subArray]);
    }
  }
  return correctSumArray;
}

// var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
// var test10 = arraysSumN(ary1, 1);
// console.log(test10); // [ [0, 1], [3, -2] ]

// var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
// var test11 = arraysSumN(ary2, 6);
// console.log(test11); // => [ [3, 2, 1], [6] ]

/******************************************************************************
** Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Examples:
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  var splitSentence = sentence.split("");
  var newSentence = []

  for (var character = 0; character < splitSentence.length; character++) {
    var nextCharacter = splitSentence[character];
    if (cipher[nextCharacter]) {
      nextCharacter = cipher[nextCharacter];
    }
    newSentence.push(nextCharacter);
  }

  return newSentence.join("");

}

// var test12 = magicCipher("add me on facebook" , { a : "c", d : "q"}); // "cqq me on fccebook"
// var test13 = magicCipher("where are you?" , { v : "l", '?' : "!"}); // "where are you!"
// var test14 = magicCipher("twmce" , { m : "n", t : "d", w : "a"}); // "dance"

// console.log(test12);
// console.log(test13);
// console.log(test14);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  arraysSumN : arraysSumN
};
