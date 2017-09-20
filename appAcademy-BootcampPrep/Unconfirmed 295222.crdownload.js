/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.
Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(ary, n) {
  var results = [];

  for (var i = 0; i < ary.length; i++) {
    var sum = 0;

    for (var j = 0; j < ary[i].length; j++) {
      sum += ary[i][j];
    }

    if (sum === n) {
      results.push(i);
    }
  }

  return results;
}
