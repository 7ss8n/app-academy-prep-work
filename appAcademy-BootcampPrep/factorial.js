/**********************************************************
Write a function factorial(n) that returns the factorial
of the number n. For example, the factorial of 5 is
5 * 4 * 3 * 2 * 1 = 120.

Examples:
> factorial(1);
1

> factorial(4);
24

> factorial(5);
120

> factorial(10);
3628800
**********************************************************/

function factorial(n) {
	factorial_result = 1;
	for (i=1; i <= n; i++) {
		factorial_result *= i;
	}
	return factorial_result;
}

console.log(factorial(10));
