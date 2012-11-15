var obj = {
	name:'jobs',
	say:function() {
		console.log(this.name);
	}
}
console.log(obj['name']);
obj['say']();
for(item in obj)
	console.log(typeof obj[item]);