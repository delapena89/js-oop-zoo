var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animal = [];
}


module.exports = Zoo;
