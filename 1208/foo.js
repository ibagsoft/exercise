var foo = function() {
	console.log(this);
};
var obj = {
	name:'jobs',
	foo:foo
}

obj.foo();
foo.call(obj);