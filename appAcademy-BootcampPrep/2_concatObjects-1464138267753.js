/***************************************************************************
Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
It returns an object containing all of the keys found in both obj1 and
obj2. If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2. Otherwise, a key's value is its value
in the original object. Do not modify the arguments.

Example 1:
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
cat3; // => { name: "hellokitty", bow: "pink", color: "white"}

Example 2:
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
***************************************************************************/

function concatObjects(obj1, obj2) {

	var result = {};
	for (var key in obj1) {

		var obj1_value = obj1[key];	

		if (key in obj2) {
			var obj2_value = obj2[key];
			result[key] = obj1_value + obj2_value;
		}
		else if (!(key in result)) {
			result[key] = obj1_value;
		}

	}

	for (var key in obj2) {

		var obj2_value = obj2[key];

		if (!(key in result)) {
			result[key] = obj2_value;
		}

	}

	return result;



}


var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
var splash_brothers = concatObjects(splash, brothers); 

console.log(splash_brothers);
