var Class = function() {
	var klass = function() {
		this.show = function() {
		};
	};
	klass.inherts = function(o) {
		//klass.prototype.info = o.info;
		for(item in o)
			klass.prototype[item] = o[item];
	};
	return klass;
};
var obj = {
	info:function() {

	};
}
var obj2 = {
	save:function() {

	};
}
var Person = new Class();
Person.inherts(obj);
Person.inherts(obj2)
var jobs = new Person();
jobs.show();
jobs.info();
jobs.save();