function myForEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
};

// myForEach([1, 2, 3], function(currentValue, index, array) {
// 	console.log(currentValue + " is at position " + index + " in array " + array);
// })

function mySelect(array, callback) {
	var selected = [];
	myForEach(array, function(currentValue, index, array) {
		if (callback(currentValue, index, array)) {
			selected.push(index);
		}
	});
	return selected;
};

// var test1 = mySelect([1, 2, 3, 4, 5, 6], function(currentValue, index, array) {
// 	return (index % 2 === 0);
// });

// console.log(test1);
// 

function myReject(array, callback) {
	var selected = [];
	for (var index = 0; index < array.length; index++) {
		if (!(callback(array[index], index, array))) {
			selected.push(array[index]);
		}
	}
	return selected;
}

// var test2 = myReject([1, 2, 3, 4, 5, 6], function(currentValue, index, array) {
// 	return (index % 2 === 0);
// })

// console.log(test2);

function myMap(array, callback) {
	var resultsOfCallback = [];
	myForEach(array, function(currentValue, index, array) {
		resultsOfCallback.push(callback(currentValue, index, array));
	})
	return resultsOfCallback;
}

var test3 = myMap(["A", "B", "C"], function (currentValue, index, array) {
	return (currentValue + index);
})

console.log(test3);