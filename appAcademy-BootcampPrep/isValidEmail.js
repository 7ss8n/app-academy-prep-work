function isValidEmail(email) {
	var email_status = true;
	var lowerEmail = email.toLowerCase();
	var splitEmail = lowerEmail.split("");

	console.log(email + ": " + atSignTest(splitEmail));
	console.log(email + ": " + dotTest(splitEmail));
	console.log(email + ": " + alphaNumTest(splitEmail));

	email_status = atSignTest(splitEmail) && dotTest(splitEmail) && alphaNumTest(splitEmail);

	console.log(email_status);

}

function atSignTest(email_array) {

	var atCount = 0;

	for (var i =0; i < email_array.length; i++) {
		if (email_array[i] === "@") {
			atCount += 1;
		}
	}

	return atCount === 1;
}

function dotTest(email_array) {

	if (!(atSignTest(email_array))) {
		return false;
	}

	var atIndex = email_array.indexOf("@");
	var dotCount = 0

	for (var i =atIndex + 1; i < email_array.length; i++) {
		if (email_array[i] === ".") {
			dotCount += 1;
		}
	}

	return dotCount === 1;

}

function alphaNumTest(email_array) {

	if (!(atSignTest(email_array))) {
		//console.log("Yikes");
		return false;
	}
	if (!(dotTest(email_array))) {
		//console.log("Yikes");
		return false;
	}

	var atIndex = email_array.indexOf("@");

	for (var i = 0; i < atIndex; i++) {
		var nextLetter = email_array[i];
		if (!(isAlpha(nextLetter) || isNum(nextLetter) || nextLetter === "_" || nextLetter === ".")) {
			return false;
		}
	}

	for (var i = atIndex + 1; i < email_array.length; i++) {
		var nextLetter = email_array[i];
		if (!(isAlpha(nextLetter) || nextLetter === ".")) {
			return false;
		}
		}

	return true;


}

function isAlpha(letter) {
	var alphabet = [
		  "a","b","c","d","e",
		  "f","g","h","i","j",
		  "k","l","m","n","o",
		  "p","q","r","s","t",
		  "u","v","w","x","y",
		  "z"
	];
	return (!(alphabet.indexOf(letter) < 0));
}

function isNum(letter) {
	var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];
	return (!(numbers.indexOf(letter) < 0));

}

// isValidEmail("RYAN@gmail.coM");
