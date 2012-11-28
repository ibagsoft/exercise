var assert = require('assert'),
	ChinaCache = require('./ChinaCache');

describe('ChinaCache',function() {
	it('extends',function() {
		var Model = ChinaCache.Class.extends({
			initialize:function(name) {
				this.name = name;
			},
			show:function() {
				return this.name;
			}
		});
		var Todo = new Model('todo');
		assert.equal('todo',Todo.show());
		assert(Todo.include);
		assert(Todo.CRUD);
	});
	it('cache',function() {
		var Model = ChinaCache.Class.extends({
			show:function() {}
		});
		var Controller = ChinaCache.Class.extends();
		var m = new Model();
		var c = new Controller();
		assert(m instanceof ChinaCache.Class);
		assert(c instanceof ChinaCache.Class);
		assert(!c.show);
	});
});