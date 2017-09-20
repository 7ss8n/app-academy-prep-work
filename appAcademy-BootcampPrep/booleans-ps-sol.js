// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false

function isOdd(num) { // given function
  return (num % 2 !== 0);
}

function isEven(num) {
  var bool = isOdd(num);
  return !bool;
}

console.log("---isOdd---");
console.log(isEven(2) === true);
console.log(isEven(5) === false);
console.log(isEven(-55) === false);

// Truthy vs Falsey: Evaluate each expression.

true && true || false; // => true

true && (false || true); // => true

(true || false) && (false || false); // => false

(true || false) || (false || false); // => true
