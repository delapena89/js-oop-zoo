var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animal = [];
}

Zoo.prototype.changeLocation = function(location) {
	this.location = location;
	return this.location;

};

Zoo.prototype.open =function() {
	if (this.status === 'closed') {
		this.status = 'open';
	}
};

Zoo.prototype.close = function () {
	if (this.status === 'open') {
		this.status = 'closed';
}
};

Zoo.prototype.isOpen = function() {
	if (this.status === 'open') {
		return "Open!";
	}
};

module.exports = Zoo;
