//Define dogs, add to array;

function Dog(name, hourWalked, dayWalked) {
	this.name = name;
	this.hourWalked = hourWalked;
	this.dayWalked = dayWalked;
}

var myDogsWalked = [
	new Dog("Bowser", "10am", "Mon"),
	new Dog("Fifi", "11am", "Tue"),
	new Dog("Maggie", "2pm", "Mon"),
	new Dog("Spike", "12pm", "Wed")]

function scheduledDog (hour, day) {
	for (var i = 0; i < myDogsWalked.length; i++) {
		var currentDog = myDogsWalked[i];
		if (currentDog.hourWalked === hour) {
			if (currentDog.dayWalked === day) {
				return currentDog.name + " ".repeat(colWidth-currentDog.name.length);
			}
		}
	}
	return " ".repeat(colWidth);
}

var colWidth = 10;
var weekDays = ["Mon", "Tue", "Wed", "Thu"];
var hoursWorkedDaily = 6;
var startTime = 9;

var dayRow = " ".repeat(colWidth);

for (var day = 0; day < weekDays.length; day++) {
	var dayWidth = weekDays[day].length;
	dayRow += (weekDays[day] + " ".repeat(colWidth-dayWidth));
}

console.log(dayRow);

for (var hour = 0; hour < hoursWorkedDaily; hour++) {
	var currentHour = (startTime+hour)%12;
	if (currentHour === 0) {
		currentHour = "12pm";
	} else if (hour > (12-startTime)) {
		currentHour += "pm";
	} else {
		currentHour += "am";
	}
	var hourLength = currentHour.length;
	var hourRow = currentHour + " ".repeat(colWidth-hourLength);

	for (var i = 0; i < weekDays.length; i++) {

		var currentDay = weekDays[i];
		var currentEntry = scheduledDog(currentHour, currentDay);
		hourRow += currentEntry;

	}
	hourRow += "TEST";
	console.log(hourRow);
}