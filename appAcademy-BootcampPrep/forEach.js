/*************************************************************
Write a function logEach(ary) that prints every element
of the array and its index to the console.

Use Array#forEach.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(array) {
  // your code here...
  array.forEach(function(currentValue, index, arr) {
  	console.log(index + ": " + currentValue);
  })
}

// logEach(["Anthony", "John", "Carson"]);


/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Use Array#forEach.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(array) {
	var maxValue = 0;
	if (array.length > 0) {
		array.forEach(function(currentValue, index, arr) {
		if (currentValue > maxValue) {
			maxValue = currentValue;
		}
	})
	} else {
		maxValue = null;
	}
	console.log(maxValue);
}

// maxValue([12, 6, 43, 2])
// maxValue([])
// maxValue([-4, -10, 0.43])

/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Use Array#forEach.

Examples:
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

function longWordCount(string, n) {
  var splitString = string.split(" ");
  var longWordCount = 0;
  splitString.forEach(function (currentValue, index, arr) {
  	if (currentValue.length > n) {
  		longWordCount += 1;
  	}
  })
  console.log(longWordCount);
}

// longWordCount("", 3);
// longWordCount("short words only", 6);
// longWordCount("one reallylong word", 9);
// longWordCount("two reallylong words inthisstring", 9);
// longWordCount("seventy schfifty five", 7);

/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.

Use Array#forEach.

Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]

Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(array, n) {
  var sumToN = [];
  array.forEach(function(subArray, index, array) {
  	var subArrayTotal = 0;
  	subArray.forEach(function(currentValue, index, array) {
  		subArrayTotal += currentValue;
  	})
  	if (subArrayTotal === n) {
  		sumToN.push(index);
  	}
  })
  return sumToN;
}

var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
console.log(results1);

var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
var results2 = arraySumN(ary2, 6);
console.log(results2);
