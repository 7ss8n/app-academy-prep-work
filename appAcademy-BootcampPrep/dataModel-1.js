// ~~~~~~ 1
var students1 = [
	{ name : "Anthony" },
	{ name : "Winnie" },
	{ name : "Pawandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {

	for (var i = 0; i < students.length; i++) {

		console.log(students[i].name);

	}

}

// printNames(students1); // uncomment when ready to test

// ~~~~~~ 2
var students2 = [
	{
		name : "Anthony",
		id : 0
	}, {
		name : "Winnie",
		id : 1
	}, {
		name : "Pawandeep",
		id : 2
	}
];

//Write a function that will print the name and id of all the stuents
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {

	for (var i = 0; i < students.length; i++) {

		var student_name = students[i].name;
		var student_id = "#" + students[i].id;

		console.log(student_name + " is student " + student_id);

	}
	
}

// printStudents(students2); // uncomment when ready to test

//~~~~~3
var students3 = [
	{
		name : "Anthony",
		id : 0,
		grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
	}, {
		name : "Winnie",
		id : 1,
		grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
	}, {
		name : "Pawandeep",
		id : 2,
		grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
	}
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function printBestGrade(students) {
	
	for (var i = 0; i < students.length; i++) {

		var student_grades = students[i].grades;
		var max_grade = 0

		for (var j = 0; j < student_grades.length; j++) {

			if (student_grades[j].score > max_grade) {

				var max_grade = student_grades[j].score;

			}

		}

		console.log(students[i].name + " " + max_grade);

	}

}

// printBestGrade(students3); // uncomment when ready to test


//Write a function that will print the name of the student and their average test score
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333


function printAverageGrade(students) {
	
	for (var i = 0; i < students.length; i++) {

		var student_grades = students[i].grades;
		var total = 0;

		for (var j = 0; j < student_grades.length; j++) {

			total += student_grades[j].score;

		}

		var average = total / student_grades.length;

		console.log(students[i].name + " " + average);

	}

}

// printAverageGrade(students3); // uncomment when ready to test

//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest scores
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Pawandeep
// Test 2: Winnie

function printBestStudent(students) {
	
	for (var i = 0; i < students.length; i++) {

		var biggest_score = 0
		var best_student = undefined;

		for (var j = 0; j < students.length; j++) {

			if (students[j].grades[i].score > biggest_score) {

				biggest_score = students[j].grades[i].score;
				best_student = students[j].name;

			}

		}

		console.log("Test " + i + ": " + best_student);	

	}

}

printBestStudent(students3); // uncomment when ready to test
