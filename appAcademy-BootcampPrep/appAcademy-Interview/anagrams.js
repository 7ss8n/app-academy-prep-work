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

/////////////// ignore above this line ////////////////////

function returnDeletions(a, b) {
	var aArr = a.split("").sort();
	var bArr = b.split("").sort();

	var letterObj = {};

	aArr.forEach(function(ele, i, arr) {
		if (ele in letterObj) {
			letterObj[ele]++;
		} else {
			letterObj[ele] = 1;
		}
	})

	bArr.forEach(function(ele, i, arr) {
		if (ele in letterObj) {
			letterObj[ele]--;
		} else {
			letterObj[ele] = -1;
		}
	})

	var totalDeletions = 0;

	for (var key in letterObj) {
		totalDeletions += Math.abs(letterObj[key]);
	}

	return totalDeletions;

	




}

function main() {
    var a = readLine();
    var b = readLine();
    console.log(returnDeletions(a, b));

}