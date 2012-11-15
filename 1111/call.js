var Person = function() {
	this.name = 'jobs';
	this.show = function() {
		console.log(this.name);
	};
};

var iverson = {
	name:'iverson'
}

var jobs = new Person();
jobs.show.call(iverson);