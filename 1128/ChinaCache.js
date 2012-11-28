var ChinaCache = {};
var Class = ChinaCache.Class = function() {};
Class.prototype = {
	include:function() {},
	CRUD:function() {}
}
Class.extends = function(options) {
	var klass = function() {
		if(typeof this.initialize == 'function'){
			this.initialize.apply(this,arguments);
		}
	};

	var Child = function() {};
	Child.prototype = Class.prototype;
	klass.prototype = new Child();
/*	klass.fn = klass.prototype;
	klass.fn.constructor = klass;
	klass._super = Class.prototype;*/

	for(var item in options){
		klass.fn[item] = options[item];
	}
	return klass;
};
module.exports = ChinaCache;