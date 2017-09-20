/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Examples:
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

function longWordCount(string, n) {
	var splitString = string.split(" ");
	var longWordCount = 0;

	for (word = 0; word < splitString.length; word++) {
		if (splitString[word].length > n) {
			longWordCount += 1;
		}
	}

	console.log(longWordCount);

}

longWordCount("", 3);
longWordCount("short words only", 6);
longWordCount("one reallylong word", 9);
longWordCount("two reallylong words inthisstring", 9);
longWordCount("seventy schfifty five", 7);
