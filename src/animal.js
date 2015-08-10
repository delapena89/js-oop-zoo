function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};
Animal.prototype.growUp = function (age) {
		this.age = age += 1;
};

Animal.prototype.feed = function () {
	if (this.awake === true) {
		return ("NOM NOM NOM");
	}
	else {
		return "I'm sleeping";
	}
};

Animal.prototype.wakeUp = function() {
	if (this.awake === false) {
		this.awake = true;
	}
	return this.awake;
};
Animal.prototype.sleep =function() {
	if (this.awake === true) {
		this.awake = false;
	}
	return this.sleep;
};


module.exports = Animal;
