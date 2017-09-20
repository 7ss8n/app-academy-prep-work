function Pokémon(name, type, moves, level) {
	this.name = name.toUpperCase();
	this.nickname = makeNickname(this.name);
	this.type = type.substring(0,1).toUpperCase() + type.substring(1).toLowerCase();
	this.level = 5;
	if (level) {
		this.level = level;
	}
	this.moves = moves;
	this.fullhp = Math.floor(this.level * 2.25);
	this.hp = this.fullhp;
	this.availableMoves = this.availableMoves();
	this.greatestMoveIndex = greatestMoveIndex(this.availableMoves);
}

Pokémon.prototype.levelUp = function() {
	this.level += 1;
	this.fullhp = Math.floor(this.level * 2.25);
	this.hp = this.fullhp;
	return this;
}

Pokémon.prototype.faint = function() {
	return this.hp <= 0;
}

Pokémon.prototype.revive = function() {
	this.hp = this.fullhp;
	return this;
}

function isVowel(letter) {
	var lowercaseLetter = letter.toLowerCase();
	var vowels = ["a", "e", "i", "o", "u"];
	return vowels.indexOf(lowercaseLetter) >= 0;
}

function makeNickname(name) {
	var secondVowelIndex = -1;
	var vowelCount = 0;
	var splitName = name.split("");

	for(i = 0; i < splitName.length; i++) {
		var character = splitName[i];
		if (isVowel(character) && vowelCount === 1) {
			secondVowelIndex = i;
			break;
		} else if (isVowel(character)) {
			vowelCount += 1;
		}
	}

	if (secondVowelIndex === -1) {
		var protoNickname = name;
	} else {
		var protoNickname = splitName.slice(0,secondVowelIndex+1).join("");
	}

	var nickname = protoNickname + "-" + protoNickname;
	return nickname;

}

Pokémon.prototype.call = function() {
	return this.nickname;
}

Pokémon.prototype.availableMoves = function() {
	var availableMoves = [this.moves[0]];
	var levelProgress = this.level / 50;
	var moveProgress = Math.floor((levelProgress)*(this.moves.length));

	if (moveProgress > 0) {
		var availableMoves = this.moves.slice(0,moveProgress);
	}

	return availableMoves;

}

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

function greatestMoveIndex(moves) {
	var greatestMoveIndex = -1;
	var greatestMoveValue = 0;
	//console.log(moves);
	for (var i = 0; i < moves.length; i++) {
		//console.log(moves[i].damage);
		if (moves[i].damage > greatestMoveValue) {
			greatestMoveIndex = i;
			greatestMoveValue = moves[i].damage;
		}
	}
	return greatestMoveIndex;
}

Pokémon.prototype.attack = function(opponent, moveName) {
	//find attack value
	var defaultMove = this.moves[this.greatestMoveIndex];
	for (var i = 0; i < this.moves.length; i++) {
		if (this.moves[i].name === moveName) {
			defaultMove = this.moves[i];
			break;
		}
	}
	console.log(this.name + " attacked with " + defaultMove.name + "!");
	console.log("Damage to " + opponent.name + ": -" + defaultMove.damage);
	console.log(this.name + " hp: " + this.hp);
	opponent.hp -= defaultMove.damage;
	console.log(opponent.name + " hp: " + opponent.hp);
}

var pikachu = new Pokémon("Pikachu", "Electric", electricTypeMoves, 10);
var bulbasaur = new Pokémon("bulbasaur", "leaf", leafTypeMoves, 11);
var onyx = new Pokémon("onYx", "roCk", rockTypeMoves);

// console.log(pikachu);
// console.log(bulbasaur);
// console.log(onyx);


// pikachu.attack(bulbasaur);
// pikachu.attack(bulbasaur);
// bulbasaur.revive();
// pikachu.attack(bulbasaur);


module.exports = Pokémon;
