var assert = require('assert'),
	ChinaCache = require('./class'),
	Class = ChinaCache.Utils.Class;

describe('class',function() {
	it('create',function() {
		var Model = new Class();
		Model.fn.init = function(title) {
			this.title = title;
		};
		var todo = new Model('todo1');
		assert.equal('todo1',todo.title);
	});
	it('namespace',function() {
		var CRUD = ChinaCache.Utils.namespace('ChinaCache.Model.Domains.CRUD');
		assert(ChinaCache.Model.Domains.CRUD);
		assert(CRUD);
	});
	it('inherts',function() {
		var Model = new Class({
			initialize:function(name) {
				this.name = name;
			},
			save:function() {
				return "my name is " + this.name;
			}
		});
		var todo = new Model('jobs');
		assert("my name is jobs",todo.save());
	});
});