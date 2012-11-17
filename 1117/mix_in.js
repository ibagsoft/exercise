var Class  = function() {
	var klass = function() {
		if(typeof this.initialize == 'function'){
			this.initialize.apply(this,arguments);
		}
	};
	klass.fn = klass.prototype;
	klass.extends = function(options) {
		for(var item in options){
			klass.fn[item] = options[item];
		}
	};
	return klass;
};

module.exports = Class;