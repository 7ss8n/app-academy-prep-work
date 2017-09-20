// Write a function isOdd(num) which takes as the argument num a number.
// It returns a boolean, true if num is odd, and false otherwise.
// Examples:
// isOdd(2) => false
// isOdd(5) => true
// isOdd(-17) => true

function isOdd(num) {
  var bool = num % 2 !== 0;
  return bool;
}

// sample test cases, all return true
console.log("---isOdd---");
console.log(isOdd(2) === false);
console.log(isOdd(5) === true);
console.log(isOdd(-17) === true);

// Write a function plusFive(num) which takes as the argument num a number.
// It returns the sum of num and 5.
// Examples:
// plusFive(0) => 5
// plusFive(-2) => 3
// plusFive(21) => 26

function plusFive(num) {
  var sum = num + 5;
  return sum;
}

// sample test cases, all return true
console.log("---plusFive---");
console.log(plusFive(0) === 5);
console.log(plusFive(-2) === 3);
console.log(plusFive(21) === 26);

// Write a function threeOrSeven(num) which takes as the argument num a number.
// It returns a boolean, true if the number is divisible by 3 or 7, and false otherwise.
// Examples:
// threeOrSeven(3) => true
// threeOrSeven(35) => true
// threeOrSeven(10) => false
// threeOrSeven(21) => true

function threeOrSeven(num) {
  var bool = (num % 3 === 0) || (num % 7 === 0);
  return bool;
}

// sample test cases, all return true
console.log("---threeOrSeven---");
console.log(threeOrSeven(3) === true);
console.log(threeOrSeven(10) === false);
console.log(threeOrSeven(21) === true);

// Order of Operations: Evaluate each expression.

(1 + 1 * 5); // => 6

(1 + 1) * 5; // => 10

1 + 2 - 5 / 6 - 1; // => 7/6 or 1.167

5 * 5 % 13; // => 12

5 / (-1 * (5 - (-10))); // => -1/3 or -0.333
