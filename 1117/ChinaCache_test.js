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
		var Model = ChinaCache.Class.extends();
		var Controller = ChinaCache.Class.extends();
		assert(Model != Controller);
		assert(Model instanceof Class);
		assert(Controller instanceof Class);
	});
});