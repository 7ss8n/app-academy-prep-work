
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

// your code here...

function divisibleByThreePairSum(array) {

	resultingArray = []

	for (i = 0; i < array.length; i++) {
		for (j = i+1; j < array.length; j++) {
			if ((array[i] + array[j]) % 3 === 0) {
				resultingArray.push([i, j]);
			}
		}
	}

	console.log(resultingArray);
}

//TEST

//divisibleByThreePairSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

/*************************************************************
Write a function `peakFinder(array)` that takes in an array of
numbers. It should return an array containing the indices of
all the peaks. A peak is an element that is greater than both
of its neighbors. If it is the first or last element, it is
a peak if it is greater than its one neighbor. Assume the
array has a length of at least 2. Writing this function does
not require a nested loop.

Examples:
> peakFinder([1,2,3,2,1])
[2]

> peakFinder([2,1,2,3,4,5])
[0, 5]

> peakFinder([4,6,9,4,2,-7,2,-4,5])
[2, 6, 8]
*************************************************************/

// your code here...

function peakFinder(array) {

	resultingArray = [];

	for (i = 0; i < array.length; i++) {
		if (i == 0 && array[i] > array[1]) {
			resultingArray.push(i);
		}
		else if (i == array.length - 1 && array[i] > array[array.length - 2]) {
			resultingArray.push(i);
		}
		else if (array[i-1] < array[i] && array[i] > array[i+1]) {
			resultingArray.push(i);
		}
	}

	console.log(resultingArray);
}

peakFinder([0, 2, 5, 1, 6, 2, 124, 3, 5, 3, 1, 6])
