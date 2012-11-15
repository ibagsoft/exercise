var http = require('http'),
	fs = require('fs');

http.createServer(function(req,res) {
	var path = req.url.slice(1);
	fs.exists(path,function(exists) {
		if(exists){
			fs.readFile(path,'utf-8',function(error,data) {
				res.write(data);
				res.end();
			});
		}
	});
}).listen(9432);
console.log('server started.');