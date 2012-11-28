function Parent (name) {
	this.name = name;
}
Parent.prototype.show = function() {
	console.log('show');
};

// 2.2借用构造函数式继承
function Child () {
	Parent.apply(this,arguments);
}
Child.prototype = new Parent();
// 缺点是父类的构造函数运行了两遍


var c = new Child('jobs');
console.log(c instanceof Parent);
console.log(c.name);
c.show();