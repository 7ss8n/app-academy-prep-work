/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){

  resulting_array = [];

  for (i = start; i <= end; i++) {
      resulting_array.push(i);
  }

  return resulting_array;

}

/******************************************************************************
** Write a function unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining
** is unique.
** Example:
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){

  resulting_array = [];

  for (i = 0; i < array.length; i++) {

      if (resulting_array.indexOf(array[i]) === -1) {
          resulting_array.push(array[i]);
      }

  }

  return resulting_array;

};

/******************************************************************************
** Write a function elementCount(array) that returns an object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.
** Example:
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){

  resulting_object = {};

  for (i = 0; i < array.length; i++) {

    if (!(array[i] in resulting_object)) {
          resulting_object[array[i]] = 0;
      }

  }

  //console.log(resulting_object)

  for (i = 0; i < array.length; i++) {

    resulting_object[array[i]] += 1;

  }

  return resulting_object;


}

// var test = elementCount(["a", "a", "a", "b"])
// console.log(test);

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/

//NOTE TO REVIEWER: This failed the test, but seems to produce the correct result. Not sure why. 
// function reverseSentence(sentence){
//     var splitSentence = sentence.split(" ");
//     var reversedSentence = [];

//     for (i = 0; i < sentence.length; i++) {

//         var next_character = splitSentence.pop();
//         reversedSentence.push(next_character);

//     }

//     var joinedReversed = reversedSentence.join(" ");
//     sentence = joinedReversed;
//     return sentence;
// }

// var test2 = reverseSentence("I want to go to the store");
// console.log(test2);

function reverseSentence(sentence){

    sentence = sentence.split(" ");
    new_sentence = []
    
    for (i = sentence.length -1; i >= 0; i--) {

        final_word = sentence[i];
        new_sentence.push(final_word);

    }

    sentence = new_sentence;
    return sentence.join(" ");

}

// var test2 = reverseSentence("I want to go to the store");
// console.log(test2);

/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/

function fizzBuzz(max){

    resulting_array2 = [];

    for (i = 1; i < max; i++) {

        if (((i % 3 === 0) ||(i % 5 === 0)) && (!(i % 15 === 0))) {
            resulting_array2.push(i);
        }

    }

    return resulting_array2;

}

// var test3 = fizzBuzz(20);
// console.log(test3)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
