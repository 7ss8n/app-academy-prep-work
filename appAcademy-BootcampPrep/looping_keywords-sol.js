/*
Write a function printNSkip5(num) that will print all the numbers from
0 to num - 1. It should skips all numbers that are multiples of 5

Examples:
> printNSkip5(5)
1
2
3
4

> printNSkip5(15)
1
2
3
4
6
7
8
9
11
12
13
14
*/

function printNSkip5(num) { // using a while loop
  var i = 0;

  while (i < num) {
    if (i % 5 === 0) {
      i++;
      continue;
    }

    console.log(i);
    i++;
  }

}

function printNSkip5(num) { // using a for loop
  for (var i = 0; i < num; i++) {
    if (i % 5 === 0) {
      continue;
    }

    console.log(i);
  }
}

/*
Write a function printNStop5(num) that will print all the numbers from
0 to num - 1. It should stop printing and end the first time it encounters
a number that is multiple of 5, except 0 (otherwise we wouldn't see anything).

Examples:
> printNStop5(5)
0
1
2
3
4

> printNStop5(15)
0
1
2
3
4
*/

function printNStop5(num) { // using a while loop
  var i = 0;

  while (i < num) {
    if (i !== 0 && i % 5 === 0) {
      break;
    }

    console.log(i);
    i++;
  }
}


function printNStop5(num) { // using a for loop
  for (var i = 0; i < num; i++) {
    if (i !== 0 && i % 5 === 0) {
      break;
    }

    console.log(i);
  }
}
