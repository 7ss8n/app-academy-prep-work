var Pokémon = require("./pokemon1");
var readline = require("readline");

var reader = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

var electricTypeMoves = [
	{ name: "Tackle", damage: 3 },
	{ name: "Thunder Shock", damage: 4 },
	{ name: "Charge Beam", damage: 5 },
	{ name: "Thunder Wave", damage: 5 },
	{ name: "Spark", damage: 7 },
	{ name: "Thunder Punch", damage: 8 },
	{ name: "Shock Wave", damage: 10 },
	{ name: "Thunder Bolt", damage: 15  },
	{ name: "Thunder", damage: 20 },
	{ name: "Zap Cannon", damage: 30 },
	{ name: "Electric Beam", damage: 35}
];
var leafTypeMoves = [
	{ name: "Absorb", damage: 2 },
	{ name: "Tackle", damage: 3 },
	{ name: "Bullet Seed", damage: 4 },
	{ name: "Mega Drain", damage: 6 },
	{ name: "Vine Whip", damage: 8 },
	{ name: "Razor Leaf", damage: 15 },
	{ name: "Giga Drain", damage: 18  },
	{ name: "Seed Bomb", damage: 22 },
	{ name: "Petal Dance", damage: 25 },
	{ name: "Solar Beam", damage: 35}
];
var rockTypeMoves = [
	{ name: "Tackle", damage: 3 },
	{ name: "Rollout", damage: 6 },
	{ name: "Rock Blast", damage: 4 },
	{ name: "Smack Down", damage: 10 },
	{ name: "Rock Throw", damage: 20 },
	{ name: "Rock Slide", damage: 30 },
	{ name: "Head Smash", damage: 40 },
	{ name: "Rock Wrecker", damage: 50 }
];


var pikachu = new Pokémon("Pikachu", "Electric", electricTypeMoves, 10);
var bulbasaur = new Pokémon("bulbasaur", "leaf", leafTypeMoves, 11);
var onyx = new Pokémon("onYx", "roCk", rockTypeMoves);


function Battle(pokemon1, pokemon2) {
	this.pokemon1 = pokemon1;
	this.pokemon2 = pokemon2;
	this.round = 1;
	this.turn = true; //if true, turn of pokemon1; if false, of pokemon2.
};



Battle.prototype.fight = function() {
	console.log("~~~~~~~ Round " + this.round + " ~~~~~~~");
	console.log("    ");
	this.round +=1;
	if (this.turn === true) {
		this.pokemon1.attack(this.pokemon2);
		this.turn = false;
	} else {
		this.pokemon2.attack(this.pokemon1);
		this.turn = true;
	}
	console.log("    ");
};
Battle.prototype.potion = function() {
	console.log("~~~~~~~ Pokémon Restored! ~~~~~~~");
	console.log("    ");
	this.round += 1;
	if (this.turn === true) {
		this.pokemon1.hp += 10;
		if (this.pokemon1.hp > this.pokemon1.fullhp) {
			this.pokemon1.hp = this.pokemon1.fullhp;
		}
		this.turn = false;
		console.log("Used potion on " + this.pokemon1.name + " (hp: " + this.pokemon1.hp + ")!");
	} else {
		this.pokemon2.hp += 10;
		if (this.pokemon2.hp > this.pokemon2.fullhp) {
			this.pokemon2.hp = this.pokemon2.fullhp;
		}
		this.turn = true;
		console.log("Used potion on " + this.pokemon2.name + " (hp: " + this.pokemon2.hp + ")!");
	}
	console.log("    ");
}
Battle.prototype.run = function() {
	console.log("~~~~~~~ Pokémon Ran! ~~~~~~~");
	console.log("    ");
	if (this.turn === true) {
		this.pokemon1.hp = 0;
		console.log(this.pokemon1.name + " ran (hp: " + this.pokemon1.hp + ")!");
	} else {
		this.pokemon2.hp = 0;
		console.log(this.pokemon2.name + " ran (hp: " + this.pokemon2.hp + ")!");
	}
	console.log("    ");
}
Battle.prototype.won = function() {
	return (this.pokemon1.faint() || this.pokemon2.faint());
}
Battle.prototype.results = function() {
	if (this.won()) {
		console.log("~~~~~~~ Pokémon Won! ~~~~~~~");
		console.log("    ");
		if (this.pokemon1.hp > this.pokemon2.hp) {
			console.log("Winner: " + this.pokemon1.name)
			console.log(this.pokemon1.nickname);
		} else if (this.pokemon1.hp < this.pokemon2.hp) {
			console.log("Winner: " + this.pokemon2.name)
			console.log(this.pokemon2.nickname);
		} else {
			console.log("It's a tie!");
		}
		console.log("    ");
	}
}
Battle.prototype.makeMove = function(userInput) {
	userInput.toLowerCase();
	if (userInput === "a") {
		this.fight();
	} else if (userInput === "p") {
		this.potion();
	} else if (userInput === "r") {
		this.run();
	}

	if (this.won()) {
		this.results();
		reader.close();
	} else {
		this.promptUser();
	}
}
Battle.prototype.promptUser = function() {
	if (this.turn) {
		var currentPokemon = this.pokemon1;
	} else {
		var currentPokemon = this.pokemon2;
	}

	console.log("What should " + currentPokemon.name + " do?");
	console.log("    ");
	reader.question("Select 'a' for attack, 'p' for potion, 'r' for run...", function(userInput) {
		console.log("    ");
		this.makeMove(userInput);
	}.bind(this));
}
Battle.prototype.play = function() {
	this.promptUser();
}

var battle1 = new Battle(bulbasaur, pikachu);
battle1.play();

