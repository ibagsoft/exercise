var ChinaCache = {};
var Class = ChinaCache.Class = {};

Class.extends = function(options) {
	if(typeof Class.cache['klass'] == 'undefined'){
		var klass = function() {
			if(typeof this.initialize == 'function'){
				this.initialize.apply(this,arguments);
			}
		};
		klass.fn = klass.prototype;
		for(var item in options){
			klass.fn[item] = options[item];
		}
		klass.fn.include = function() {};
		klass.fn.CRUD = function() {};
		Class.cache['klass'] = klass;
	}
	return Class.cache['klass'];
};
Class.cache = {};

module.exports = ChinaCache;