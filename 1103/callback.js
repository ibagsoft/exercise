var foo = function(func) {
	var name = 'jobs';
	func(name);
};
foo(function(name) {
	console.log(name);
});

var bar = function() {
	var name = 'bar';
	return function() {
		console.log(name);
	};
};
var new_bar = bar();
new_bar();
