
function Parent (name) {
	this.name = name;
}
Parent.prototype.show = function() {
	console.log('show');
};


function Child (name) {
}
// 2.1原型式继承
Child.prototype = new Parent();


var c = new Child('jobs');
console.log(c instanceof Parent);
// 缺点是无法为父类的构造函数传参
console.log(c.name);
c.show();