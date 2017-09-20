// var cat1 = {
// 	name : "Kitty",
// 	age : 2,
// 	meow : function() {
// 		console.log(this.name + " says meow.");
// 	}
// };
// var cat2 = {
// 	name : "Whiskers",
// 	age : 7,
// 	meow : function() {
// 		console.log(this.name + " says meow.");
// };
// var cat3 = {
// 	name : "Whitney",
// 	age : 11,
// 	meow : function() {
// 		console.log(this.name + " says meow.");
// };

function Cat(name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
}

cat.prototype.meow = function() {
	console.log(this.name + "says meow.");
}

var cat4 = new Cat("April", 3, "brown-gold");
var cat5 = new Cat("Sam", 2, "white");
var cat6 = new Cat("Wilson", 9, "brown");