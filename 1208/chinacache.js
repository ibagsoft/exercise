var ChinaCache = ChinaCache || {};
var View = ChinaCache.View = function() {};
ChinaCache.View.prototype = {
	proxy:function(func) {
		var that = this;
		return function() {
			func.apply(that,arguments);
		}
	}
}
ChinaCache.View.extend = function(options) {
	var klass = function() {
		if(typeof this.initialize == 'function'){
			this.initialize.apply(this,arguments);
		}

		this.events = this.events || {};
		var pattern = /(\w+)\s+(.*)/;
		for(var item in this.events){
			var match = item.match(pattern);
			var el = match[2];
			var event = match[1];
			var method_name = this.events[item];
			var method = this[method_name];
			var that = this;
			method = this.proxy(method);
			$(el).bind(event,method);
		}
	};
	var Child = function() {};
	Child.prototype = ChinaCache.View.prototype;
	klass.prototype = new Child();
	klass._super = ChinaCache.View.prototype;
	klass.prototype.constructor = klass;

	for(var item in options){
		klass.prototype[item] = options[item];
	}

	return klass;
};