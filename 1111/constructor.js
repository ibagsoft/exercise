var Class = function() {
	var klass = function() {
		if(typeof klass.initialize == 'function'){
			klass.initialize.apply(klass.prototype,arguments);
		}
		this.show = function() {
			console.log(this.name);
		};
	};
	return klass;
};
var Person = new Class();
Person.initialize = function(name) {
	this.name = name;
};
var jobs = new Person('job');
jobs.show();