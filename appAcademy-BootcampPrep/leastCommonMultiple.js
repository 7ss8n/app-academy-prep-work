/**********************************************************
Write a function leastCommonMultiple(num1, num2) that
returns the smallest number which is a multiple of both
inputs.

Examples:
> leastCommonMultiple(2, 3);
6

> leastCommonMultiple(6, 10);
30

> leastCommonMultiple(24, 26);
312
**********************************************************/

function leastCommonMultiple(num1, num2) {
	var i = Math.min(num1, num2); //smaller number 
	var j = Math.max(num1, num2); //larger number

	var growth = i;

	while(true) {
		if (growth % j === 0) {
			return growth;
		}
		growth += i;
	}

}

console.log(leastCommonMultiple(26, 24))
