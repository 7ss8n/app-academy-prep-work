/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(array) {
  // your code here...
  for (i = 0; i < array.length; i++) {
  	output = i + ": " + array[i];
  	console.log(output);
  }
}

// test cases:

logEach(["Anthony", "John", "Carson"]);

/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(array) {
  // your code here...
  if (array.length === 0) {
  	return null;
  }
  else {
  	initial = array[0];
  	for (i = 1; i < array.length; i++) {
  		if (array[i] > initial) {
  			initial = array[i];
  		}
  	}
  	return initial;
  }
  }


// test cases:

console.log(maxValue([12, 6, 43, 2]) === 43);
console.log(maxValue([12, 6, 43, 2]));
console.log(maxValue([]) === null);
console.log(maxValue([-4, -10, 0.43]) === 0.43);

/*************************************************************
Write a function printRange(start, end) that prints all
the numbers from start to end. If a range doesn't exist
(start > end), then print "Bad Range" instead.

Examples:
> printRange(22, 24)
22
23
24

> printRange(5, 1)
Bad Range
*************************************************************/

function printRange(start, end) {
  // your code here...
  if (end < start) {
  	console.log("Bad Range");
  }
  else if (end === start) {
  	console.log(start);
  }
  else {
  	for (i = start; i <= end; i++) {
  		console.log(i);
  	}
  }
}

// test cases:

printRange(22, 27);
printRange(5, 1); 
printRange(5, 5);
