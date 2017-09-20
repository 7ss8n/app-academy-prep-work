function randomValidIndex(array) {
	var maximumIndex = array.length -1;
	var randomGenerated = Math.random() * maximumIndex;
	randomGenerated = Math.floor(randomGenerated);
	return randomGenerated;
}

// var testArray1 = [1,2,3,4,5,6,7,8,9,10];

// for(var i = 0; i < 1000; i += 1) {
//   var testIndex1 = randomValidIndex(testArray1);

//   if(testIndex1 < 0 || testIndex1 >= testArray1.length) {
//     console.log("NOT WORKING. Found an out of bounds index:", idx);
//   } 
// }
// 

function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function oddsUpEvensDown(array) {
	roundedArray = [];
	for (var index = 0; index < array.length; index++) {
		var nextNumber = array[index];
		if (isEven(index)) {
			roundedArray.push(Math.floor(nextNumber));
		} else {
			roundedArray.push(Math.ceil(nextNumber));
		}
	}
	console.log(roundedArray);
}

// var arr = [2.1, 3.01, 3.7, -1.2];
// oddsUpEvensDown(arr); //=> [2, 4, 3, -1]
// 

function randomNumberGenerator(minimum, range) {
	var randomNumber = Math.floor((minimum + range) * Math.random())
	if (randomNumber < minimum) {
		randomNumberGenerator(minimum, range);
	} else {
		console.log(randomNumber);
	}
}

randomNumberGenerator(1, 10); //=> 1
randomNumberGenerator(1, 10); //=> 7
randomNumberGenerator(1, 10); //=> 10
randomNumberGenerator(1, 10); //=> 3
randomNumberGenerator(30, 1); //=> 30
randomNumberGenerator(30, 1); //=> 31
randomNumberGenerator(100, 100); //=> 100
randomNumberGenerator(100, 100); //=> 200
randomNumberGenerator(100, 100); //=> 136
randomNumberGenerator(100, 100); //=> 175