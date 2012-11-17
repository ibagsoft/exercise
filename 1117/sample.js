var Parent = function() {};
Parent.prototype.show = function() {
	console.log('show');
};
var Child = function() {};
Child.prototype = new Parent;
var c = new Child();
// console.log(c instanceof Parent);
var loadShow = function(parent) {
	if(parent instanceof Parent)
		parent.show();
};
var obj = {
	show:function() {
		console.log('obj.show')
	}
}
loadShow(new Child);