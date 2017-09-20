var cookieMonster = {
  name: "Fred",

  hair: "blue",

  favoriteFoods : ["cookies"],

  goodFoods : ["pizza", "skittles"],

  badFoods : ["water", "banana"],

  hatedFoods : ["spinach"],

  eat : function(food) {
    var score = 0;

    for (var i = 0; i < food.length; i += 1) {
      var foodItem = food[i];

      if (this.favoriteFoods.indexOf(foodItem.toLowerCase()) !== -1) {
        score += 2;
      } else if (this.goodFoods.indexOf(foodItem.toLowerCase()) !== -1) {
        score += 1;
      } else if (this.badFoods.indexOf(foodItem.toLowerCase()) !== -1) {
        score -= 1;
      } else if (this.hatedFoods.indexOf(foodItem.toLowerCase()) !== -1) {
        score -= 2;
      }
    }

    return score;
  },

  isAlrightMeal : function(food) {
    var score = this.eat(food);

    if (score >= -1 && score <= 1) {
      return true;
    }

    return false;
  }
};

/********/
module.exports = cookieMonster; // Don't touch this line
