// 1.1javascript是函数式语言

Function.prototype.method = function(name,func) {
	this.prototype[name] = func;
	return this;
};
// console.log(Number.__proto__)
//1.2语法糖
Number.method('days',function() {
	var cur_date = new Date();
	cur_date.setDate(this);
	return cur_date;
});
var i = 3;//i = new Number(3);
console.log(i.days());