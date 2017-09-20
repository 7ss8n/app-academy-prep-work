/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(array){
  for(var i = 0; i < array.length; i += 1){
    var element = array[i];
    console.log(i + ": " + element);
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

function maxValue(ary){
  if (ary.length === 0) { // ary is an empty array
    return null;
  }

  var largest = ary[0]; // initialize largest to the first element

  for(var i = 1; i < ary.length; i += 1){ // loop through the rest of the elements
    var current = ary[i];

    if(current > largest){
      largest = current; // update largest
    }
  }

  return largest;
}

// test cases:
console.log(maxValue([12, 6, 43, 2]) === 43);
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

function printRange (start, end){
  if (start > end) {
    return "Bad Range";
  }

  for (var i = start; i <= end; i += 1){
    console.log(i);
  }
}

// test cases:
printRange(22, 24);
printRange(5, 1); 
