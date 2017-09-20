/*************************************************************
Write a function pairN(ary, n) which takes an the argument
ary, an array of numbers and n, a number. It returns an array
containing all the pairs of indices of elements in the array
that sum to n. Note the order of the the output.

Examples:
var ary1 = [5, -5, 2, -2];
pairN(ary1, 0); // => [[0, 1], [2, 3]]

var ary2 = [1, 5, 3, 2, 3]
pairN(ary2, 6); // => [[0, 1], [2, 4]
*************************************************************/

function pairN(ary, n) {
  var pairs = [];

  for(var i = 0; i < ary.length; i += 1){
    for(var j = i + 1; j < ary.length; j += 1){
      if(ary[i] + ary[j] === n){
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
