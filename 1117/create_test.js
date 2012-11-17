var assert = require('assert'),
	Class = require('./create');
//创建：1.1
describe('create',function() {
	it('create',function() {
		var _class = new Class();
		assert(_class.extends);
	});
});