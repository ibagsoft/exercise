var Person = function() {
	this.name = 'jobs';
};
Person.prototype.show = function() {
	console.log(this.name)
};

var jobs = new Person();
console.log(jobs.show === Person.prototype.show)
console.log(jobs.__proto__.show === Person.prototype.show)