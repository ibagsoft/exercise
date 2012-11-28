function Parent (name) {
	this.name = name;
}
function Child () {}
extend(Child,Parent);
function Child2 () {}
extend(Child2,Parent);

// 2.5 圣杯式继承
function extend (c,p) {
	var F = function() {};
	F.prototype = p.prototype;
	c.prototype = new F();
	c._super= p.prototype;
	c.prototype.constructor = c;
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