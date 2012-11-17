var Class = function() {};
Class.inherits = function(c,p) {
	// c.prototype = new p();
	//3.3组合继承
	c.prototype = p.prototype;
};

module.exports = Class;