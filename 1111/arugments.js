var sample = function(a) {
	console.log(a);
	console.log(arguments[0]);
	for(var item = 1,length = arguments.length;item<length;item++){
		console.log(arguments[item]);
	}
};

sample(1,2);