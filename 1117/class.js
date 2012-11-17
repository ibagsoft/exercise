var ChinaCache = {};
ChinaCache.Utils = {};
ChinaCache.Utils.Class = function() {
	var klass = function() {
		this.init.apply(this,arguments);
	};
	klass.fn = klass.prototype;
	return klass;
};
ChinaCache.Utils.namespace  =function(ns_string) {
	var spolits = ns_string.split('.');
	if(spolits[0] == 'ChinaCache'){
		spolits  = spolits.slice(1);
	}
	var parent = ChinaCache;
	var i = 0,length = spolits.length;
	for(;i<length;i++){
		if(typeof parent[spolits[i]] == 'undefined'){
			parent[spolits[i]] = {};
		}
		parent = parent[spolits[i]];
	}
	return parent;
};
module.exports = ChinaCache;