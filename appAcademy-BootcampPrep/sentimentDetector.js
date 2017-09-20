var fs = require("fs");

function rawTexttoObjectArray(text) {
	var splitText = text.split("\n");
	var objArray = []
	for (i = 0; i < splitText.length; i++) {
		var rawObj = {};
		var splitText2D = splitText[i].split(" ");
		for (j = 0; j < splitText2D.length; j++) {
			var myKey = splitText2D[j].split("=")[0];
			var myVal = splitText2D[j].split("=")[1];
			rawObj[myKey] = myVal;
		}
		objArray.push(rawObj);
	}
	return objArray;
}

function getRecordsFromFile(filename, cb) {
	fs.readFile(filename, "utf8", function(err, data) {
		if (err) {
			console.log("--Error--");
			console.log(err);
			return;
		}
		data = rawTexttoObjectArray(data);
		cb(data);
	});
}

function detectSentiment(filename, sentence, cb) {

	var mySentence = sentence.split(" ");

	var sentimentScore = getRecordsFromFile(filename, function(data) {
		var score = 0;
		for (var i = 0; i < mySentence.length; i++) {
			var nextWord = mySentence[i].toLowerCase();
			for (var j = 0; j < data.length; j++) {
				if (data[j].word1 === nextWord) {
					// console.log(data[j]);
					if (data[j].priorpolarity === "negative") {
						score -=1;
						break;
					} else if (data[j].priorpolarity === "positive") {
						score += 1;
						break;
					}
				}
			}
		}
		cb(sentence, score);
	});

}



detectSentiment("sentimentDict.txt", "I love you", function(sentence, score) {
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score) {
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score) {
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score) {
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});