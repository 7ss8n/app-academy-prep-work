function objectSelect(obj, callback) {

	newObj = {};
	for (var key in obj) {
		if (callback(key, obj[key])) {
			newObj[key] = obj[key];
		}
	}
	return newObj;

}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

var matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});

console.log(matchingPairs);
