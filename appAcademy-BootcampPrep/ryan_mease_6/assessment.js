/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

Do NOT use the built-in Array#forEach method!

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier or Array#forEach.

Do not use a for or while loop!

Examples:
> myMap([1, 2, 3], function(ele, i, arr){
..  return ele * i;
..})
[0, 2, 6] //return value

> myMap([1, 2, 3], function(ele, i, arr){
..  return ("This element is " + ele);
..})
["This element is 1", "This element is 2", "This element is 3"] //return value
******************************************************************************/
function myMap(arr, cb) {
  var resultsOfCallback = [];
  myForEach(arr, function(ele, i, arr) {
    resultsOfCallback.push(cb(ele, i, arr));
  })
  return resultsOfCallback;
}

/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
> var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

> passingStudents(students)
[ 'Kush', 'Ned' ] //return value
******************************************************************************/
function addScoreTotal(ele, i, arr) {
  arr[i].total = 0;
}
function addAverage(ele, i, arr) {
  arr[i].average = 0;
}

function computeStudentTotal(ele, i, arr) {
  this.total += arr[i].score;
}

function computeTotals(ele, i, arr) {
  var nextStudent = arr[i]
  var nextStudentScores = nextStudent.grades;
  nextStudentScores.forEach(computeStudentTotal, nextStudent);
}

function computeAverages(ele, i, arr) {
  var studentTotal = arr[i].total;
  arr[i].average = (studentTotal / arr[i].grades.length);
}

function getAverages(studentArray) {

  studentArray.forEach(addScoreTotal);
  studentArray.forEach(computeTotals);
  studentArray.forEach(addAverage);
  studentArray.forEach(computeAverages);
  return studentArray;
  
  }

function checkPass(ele, i, arr) {
  if (arr[i].average >= 70) {
    arr[i] = arr[i].name;
  } else {
    arr.splice(i, 1);
  }
}

function passingStudents(array) {
  var arrayWithAverages = getAverages(array);
  arrayWithAverages.forEach(checkPass);
  return arrayWithAverages;
}

//NOTE TO REVIWER:
//The code below is how I really wanted to execute, but I could not figure out how to get forEach to refer to a second array. Is there a way to do this? I think it would make the code easier to read.
//
//
// function checkPass(ele, i, arr) {
//   if (arr[i].average >= 70) {
//     passed.push(arr[i].name);
//   } 
// }

// function passingStudents(array) {
//   var passed = [];
//   var arrayWithAverages = getAverages(array);
//   arrayWithAverages.forEach(checkPass);
//   return passed;
// }

// var students = [
//   {
//     "name": "Kush",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Ned",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Haseeb",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }];

// console.log(passingStudents(students));

/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence.

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/
function isPrime(n) {
  var primeStatus = true;
  for (var i = 3; i < n; i += 2) {
    if (n % i === 0) {
      primeStatus = false;
      break;
    }
  }
  return primeStatus;
}

function generatePrimeArray(base) {
  var primeArray = [2]; // to allow for more efficient for loop, 3 -> base;
  for (var i = 3; i <= base; i += 2) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

function add(a, b) {
  return a + b;
}

function laligatSequence(base, n){
  
  var myLaligat = [];
  if (n > 0) {
    myLaligat = [base];
  }

  for (var i = 0; i < n -1; i++) {
    var primeArray = generatePrimeArray(base);
    var sum = primeArray.reduce(add, 0);
    myLaligat.push(sum);
    base = sum;
  }

  return myLaligat;

}

// var test4 = laligatSequence(10, 4);
// console.log(test4);
// var test5 = laligatSequence(5, 0);
// console.log(test5);



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myMap : myMap,
  myForEach : myForEach,
  passingStudents: passingStudents,
  laligatSequence : laligatSequence
};
