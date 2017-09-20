/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.
** Example
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [ 0, 4 ], [ 1, 3 ] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

function divisibleByFivePairSum(array){
  var divisilbleByFiveArray = []
  for (var firstIndex = 0; firstIndex < array.length - 1; firstIndex++) {
    for (var secondIndex = firstIndex+1; secondIndex < array.length; secondIndex++) {
      var firstNumber = array[firstIndex];
      var secondNumber = array[secondIndex];
      var testSum = firstNumber + secondNumber;
      if (testSum % 5 === 0) {
        divisilbleByFiveArray.push([firstIndex, secondIndex]);
      }
    }
  }
  return divisilbleByFiveArray;
}

// var test1 = divisibleByFivePairSum([13, 22, 8, -3, 12]);
// console.log(test1);

/******************************************************************************
** Write a function #myIndexOf(array, element) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `element` will be a primitive data type (no arrays or objects)
**
** DO NOT USE THE BUILT IN 'Array.prototype.indexOf' method!!!
**
** Example
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

// var test2 = myIndexOf([1,2,3,4,5], 5)
// var test3 = myIndexOf(["a", "b", "c"], "a")
// var test4 = myIndexOf(["a", "b", "c"], "d")

// console.log(test2);
// console.log(test3);
// console.log(test4);

/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
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

var test5 = magicCipher("add me on facebook" , { a : "c", d : "q"}) // "cqq me on fccebook"
var test6 = magicCipher("where are you?" , { v : "l", '?' : "!"}) // "where are you!"
var test7 = magicCipher("twmce" , { m : "n", t : "d", w : "a"}) // "dance"

// console.log(test5);
// console.log(test6);
// console.log(test7);


/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Example
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
function minMaxDifference(array){
  var biggestNumber = Math.max.apply(null, array); //only used this after reading Mozilla docs
  var smallestNumber = Math.min.apply(null, array); // ""
  return (biggestNumber - smallestNumber);
}

// var test8 = minMaxDifference([1,2,3,4,5]) // 4
// var test9 = minMaxDifference([5,4,3,2,1]) // 4
// var test10 = minMaxDifference([4,2,5,1,-5]) // 10

// console.log(test8);
// console.log(test9);
// console.log(test10);

/******************************************************************************
** Write a function #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.
** Example
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/
function dynamicFizzBuzz(max, divisor1, divisor2){
  var FizzBuzzArray = [];
  for (var number = 1; number < max; number++) {
    if ((number % divisor1 === 0 || number % divisor2 === 0)
      && !(number % divisor1 === 0 && number % divisor2 === 0)) {
      FizzBuzzArray.push(number);
    }
  }
  return FizzBuzzArray;
}

// var test11 = dynamicFizzBuzz(20, 5, 3) // [3, 5, 6, 9, 10, 12, 18]
// var test12 = dynamicFizzBuzz(20, 4, 6) // [4, 6, 8, 16, 18]

// console.log(test11);
// console.log(test12);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
