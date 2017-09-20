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

function main() {

    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    if (n > m) {
    	console.log("No")
    } else {
    	ransomObj = {};

    	for (var i = 0; i < ransom.length; i++) {
    		if (ransom[i] in ransomObj) {
    			ransomObj[ransom[i]]++;
    		} else {
    			ransomObj[ransom[i]] = 1;
    		}
    	}
    	
    	for (var j = 0; j < magazine.length; j++) {
    		if (magazine[j] in ransomObj) {
    			ransomObj[magazine[j]]--;
    			if (ransomObj[magazine[j]] < 0) {
    				ransomObj[magazine[j]] = 0;
    			}
    		}
    	}

    	var checksum = 0;
    	for (var key in ransomObj) {
    		checksum += ransomObj[key];
    	}

    	// console.log(ransomObj);
    	if (checksum === 0) {
    		console.log("Yes");
    	} else {
    		console.log("No");
    	}
    }

}