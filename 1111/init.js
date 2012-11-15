var Class = function() {
	var klass = function() {
		this.initialize.apply(this,arguments);
	};
	klass.fn = klass.prototype;
	return klass;
};


var Model = new Class();//定义类
Model.fn.initialize = function() {
	this.save = function() {};
};//定义构造函数
var View = new Class();
View.fn.initialize = function() {
	this.render  = function() {};
};
var view = new View();
var todo = new Model();
console.log(typeof view.render);
console.log(typeof todo.save);