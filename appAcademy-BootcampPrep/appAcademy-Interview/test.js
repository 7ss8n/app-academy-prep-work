// Your code here
var myArray = [];

myArray.push("Ryan Mease");
myArray.push("rsmease");

function cutName(name) {
	var splitName = name.split(" ");
  	return splitName;
}

var myInfo = {};

myInfo["fullName"] = cutName(myArray[0]);
myInfo["skype"] = myArray[1];
myInfo["github"] = "rsmease";
//myInfo["linkedIn"] = "https://www.linkedin.com/in/ryan-mease-140b473a/";

console.log(myInfo);