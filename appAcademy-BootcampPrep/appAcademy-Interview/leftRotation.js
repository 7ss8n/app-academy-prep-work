process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
	var numsTemp = readLine().split(" ").map(Number);
	var lenArr = numsTemp[0];
	var leftShift = numsTemp[1];

	var arr = readLine().split(" ").map(Number);
	var shiftedArr = [];

	for (var i = 0; i < leftShift; i++) {
		shiftedArr.push(arr[i]);
	}

	for (var j = arr.length - 1; j >= leftShift; j--) {
		shiftedArr.unshift(arr[j]);
	}

	console.log(shiftedArr.join(" "))
}