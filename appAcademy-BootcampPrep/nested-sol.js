
/*************************************************************
Write a function `divisibleByThreePairSum(array)` that takes
an array of numbers. It should return an array of all the
pairs of indices whose sum is a multiple of three.

Examples:
> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]]
*************************************************************/

function divisibleByThreePairSum(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      var sum = array[i] + array[j];

      if (sum % 3 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

/*************************************************************
Write a function `peakFinder(array)` that takes in an array of
numbers. It should return an array containing the indices of
all the peaks. A peak is an element that is greater than both
of its neighbors. If it is the first or last element, it is
a peak if it is greater than its one neighbor. Assume the
array has a length of at least 2.

Examples:
> peakFinder([1,2,3,2,1])
[2]

> peakFinder([2,1,2,3,4,5])
[0, 5]

> peakFinder([4,6,9,4,2,-7,2,-4,5])
[2, 6, 8]
*************************************************************/

function peakFinder(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i += 1) {
    var center = array[i];
    var left = array[i - 1];
    var right = array[i + 1];

    if (i === 0 && center > right) { // first element
        peaks.push(i);
    } else if ((i === array.length - 1) && (center > left)) { // last element
        peaks.push(i);
    } else if ((center > left) && center > right) {
        peaks.push(i);
    }
  }

  return peaks;
}
