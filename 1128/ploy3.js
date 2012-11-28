function Parent (name) {
	this.name = name;
}
Parent.prototype.show = function() {
	console.log('show');
};

// 2.3组合式继承
function Child () {
	Parent.apply(this,arguments);
}
Child.prototype = Parent.prototype;


var c = new Child('jobs');
console.log(c instanceof Parent);
console.log(c.name);
c.show();