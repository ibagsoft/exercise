var Person = function(name) {
	var age = 45;
	this.name = name;
	this.say_name = function() {
		return age;
	};
};

var jobs = new Person('jobs');
console.log(jobs.name);
console.log(jobs.say_name());

var iverson = Person('iverson');
console.log(name);