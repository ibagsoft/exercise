function Parent (name) {
	this.name = name;
}
function Child () {}
extend(Child,Parent);
function Child2 () {}
extend(Child2,Parent);

// 2.4 间接函数式继承
function extend (c,p) {
	var F = function() {};
	F.prototype = p.prototype;
	c.prototype = new F();
}

function Mix_in (obj,options) {
	for(var item in options){
		obj.__proto__[item] = options[item];
	}
}
var c = new Child();
Mix_in(c,{
	show:function() {console.log('show')}
});
c.show();
var c2 = new Child2();
console.log(typeof c2.show == 'undefined');