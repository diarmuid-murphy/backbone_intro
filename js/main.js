var Person = function(config){
 	this.name = config.name;
  	this.age = config.age;
  	this.occupation = config.occupation;
};

Person.prototype.work = function(){
	return this.name + ' is working.'; // In the tutorial this is incorrectly show as - return this.name   ' + is working.';
};