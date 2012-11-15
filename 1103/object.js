var assert = require('assert');//npm install -g mocha

describe('object',function() {
	it('{}',function() {
		var obj = {
			name:'obj',
			des:'des'
		};//var obj = {};
		assert.equal('obj',obj.name);
		assert.equal('des',obj.des);
	});
	it('object',function() {
		var obj = new Object();
		obj.name = 'obj';
		obj.des = "des";
		assert.equal('obj',obj.name);
		assert.equal('des',obj.des);
	});
});