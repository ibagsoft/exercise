var assert = require('assert'),
	Class  = require('./mix_in');
//混入:2.1
describe('mix_in',function() {
	it('extends',function() {
		var _class = new Class();
		_class.extends({
			initialize:function(name) {
				this.name = name;
			},
			save:function() {
				return 'My name is ' + this.name;
			}
		});
		var todo = new _class('jobs');
		assert('My name is jobs',todo.save);
	});
});