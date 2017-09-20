// Write a function hello(str) which takes as the argument str a string.
// It returns a string saying "Hello" to str.
// Examples:
// hello("Ned") => "Hello, Ned."
// hello("Anthony") => "Hello, Anthony."
// hello("Daniel") => "Hello, Daniel."

function hello(str) {
  // your code here...
  return "Hello, " + str + ".";
}

console.log("--hello--");
console.log(hello("Ned") === "Hello, Ned.");
console.log(hello("Anthony") === "Hello, Anthony.");
console.log(hello("Daniel") === "Hello, Daniel.");

// Write a function yell(str) which takes as the argument str a string.
// It returns a string, a 'yelling' version of str.
// Examples:
// yell("Hello world!") => "HELLO WORLD!"
// yell("time to program") => "TIME TO PROGRAM"

function yell(str) {
  // your code here...
  return str.toUpperCase();
}

console.log("--yell--");
console.log(yell("Hello world!") === "HELLO WORLD!");
console.log(yell("time to program") === "TIME TO PROGRAM");

// Write a function whisper(str) which takes as the argument str a string.
// It returns a string, a 'whispered' version of str.
// Examples:
// whisper("Hey Anthony") => "...hey anthony..."
// whisper("YEA! that was fun") => "...yea! that was fun..."

function whisper(str) {
  // your code here...
  return "..." + str.toLowerCase() + "...";
}

console.log("--whisper--");
console.log(whisper("Hey Anthony") === "...hey anthony...");
console.log(whisper("YEA! that was fun") === "...yea! that was fun...");

// Write a function echo(str) which takes as the argument str a string.
// It returns a string, an 'echoed' version of str.
// Examples:
// echo("Mom!") => "MOM! ... Mom! ... mom!"
// echo("hey") => "HEY ... hey ... hey"

function echo(str) {
  // your code here...
  return str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase();
}

console.log("--echo--");
console.log(echo("Mom!") === "MOM! ... Mom! ... mom!");
console.log(echo("hey") === "HEY ... hey ... hey");

// Write a function isSubstring(searchString, subString) which takes the arguments
// searchString and subString strings. It returns a boolean, true if the subString
// is found in the searchString, and false otherwise.
// Examples:
// isSubstring("The cat went to the store", "he cat went") => true
// isSubstring("Time to program", "time") => true
// isSubstring("Jump for joy", "joys") => false

function isSubstring(searchString, subString) {
  // your code here...
  searchString = searchString.toLowerCase();
  if (searchString.indexOf(subString) !== -1) {
  	return true;
  }
  else {
  	return false;
  }
}

console.log("--isSubstring--");
console.log(isSubstring("The cat went to the store", "he cat went") === true);
console.log(isSubstring("Time to program", "time") === true);
console.log(isSubstring("Jump for joy", "joys") === false);
