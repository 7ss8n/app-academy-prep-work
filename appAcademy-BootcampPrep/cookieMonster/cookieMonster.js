var cookieMonster = {
	name : "Fred",
	hair : "blue",
	favoriteFoods : ["cookies"],
	goodFoods : ["pizza", "skittles"],
	badFoods : ["water", "banana"],
	hatedFoods : ["spinach"],

	eat : function(food) {
		var score = 0
		for (i = 0; i < food.length; i++) {
			next_food = food[i];
			for (j = 0; j < this.favoriteFoods.length; j++) {
				if (next_food === this.favoriteFoods[j]) {
					score += 2;
					break;
				}
			};
			for (k = 0; k < this.goodFoods.length; k++) {
				if (next_food === this.goodFoods[k]) {
					score += 1;
					break;
				}
			};
			for (m = 0; m < this.badFoods.length; m++) {
				if (next_food === this.badFoods[m]) {
					score -= 1;
					break;
				}
			};
			for (n = 0; n < this.hatedFoods.length; n++) {
				if (next_food === this.hatedFoods[n]) {
					score -=2;
					break;
				}
			};
		}
		return score;
		},

	isAlrightMeal : function(food) {
		if (this.eat(food) >= -1 && this.eat(food) <= 1) {
			return true;
		}
		else {
			return false;
		}
	}

};

/********/
module.exports = cookieMonster; // Don't touch this line
