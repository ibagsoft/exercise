var Person = function() {
};
Person.prototype.say = function() {
	console.log('say');
};
var jobs = new Person();
jobs.say();