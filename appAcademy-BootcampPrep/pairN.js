/*************************************************************
Write a function pairN(ary, n) which takes the arguments:
  - ary, an array of numbers
  - n, a number

It returns an array containing all the pairs of indices of elements
in the array that sum to n.

Examples:
var ary1 = [5, -5, 2, -2];
pairN(ary1, 0); // => [[0, 1], [2, 3]]

var ary2 = [1, 5, 3, 2, 3]
pairN(ary2, 6); // => [[0, 1], [2, 4]
*************************************************************/

function pairN(ary, n) {
  // your code here...
  resultingArray = []

  for (i = 0; i < ary.length; i++) {
  	for (j = i+1; j < ary.length; j++) {
  		if (ary[i] + ary[j] === n) {
  			resultingArray.push([i, j]);
  		}
  	}
  }
  console.log(resultingArray)
}

pairN([1, 2, 3, 4, 5, 6, -1, 2, 4, 6], 5)
