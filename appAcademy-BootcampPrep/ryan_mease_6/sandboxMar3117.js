var students = [
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
    passed.push(arr[i].name);
  } 
}

function passingStudents(array) {
  var passed = [];
  var arrayWithAverages = getAverages(array);
  arrayWithAverages.forEach(checkPass);
  return passed;
}

var test2 = passingStudents(students);
console.log(test2);


