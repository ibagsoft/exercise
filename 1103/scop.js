var foo = function() {
	this.name = 'foo';
	var a = 'a';
	if(true){
		var b = 'b';
	};
	console.log(this);
	var bar = function() {
		var c = 'c';
		console.log(this);
	};
	var _bar = new bar();
};
var f = new foo();