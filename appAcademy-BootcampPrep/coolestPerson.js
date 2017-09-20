var fs = require("fs");

function getRecordsFromFile(filename, cb) {
	fs.readFile(filename, "utf8", function(err, data) {
		if (err) {
			console.log("--Error--");
			console.log(err);
			return;
		}
		var records = data.split("\n");
		cb(records);
	});
}

// getRecordsFromFile("readText1.txt");

function mostCoolFromFile(filename, cb) {
	var records = getRecordsFromFile(filename, function(records) {
		var coolest;
		var coolestRating = -1;

		records.forEach(function(record) {
		var name = record.split(" ")[0];
		var rating = parseInt(record.split(" ")[1]);

		if (rating > coolestRating) {
			coolest = name;
			coolestRating = rating;
		}
	});
	cb(coolest);
});
};

mostCoolFromFile("readText1.txt", function(coolestPerson) {
	console.log(coolestPerson);
});