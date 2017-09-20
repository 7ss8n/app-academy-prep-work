var readline = require("readline");

var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

reader.question("What is your name?", function(answer) {
	console.log("Hello " + answer + "!");
	reader.close();
});

console.log("\n")
console.log("Last program line.");