var assert  = require('assert'),
	Class = require('./inherits');

//继承：3
describe('inherits',function() {
	//3.1原型继承
	it('prototype',function() {
		var Parent  = function() {};
		Parent.prototype.show = function() {};
		var Child = function() {};
		Class.inherits(Child,Parent);
		var child = new Child();
		assert(child.show);
	});
	//3.2调用父类的构造函数
	it('constructor',function() {
		var Parent = function(name) {
			this.name = name;
		};
		Parent.prototype.show = function() {
			return this.name;
		};
		var Child  = function(name) {
			Parent.call(this,name);
		};
		Class.inherits(Child,Parent);
		var child = new Child('jobs');
		assert.equal('jobs',child.show());
	});
});