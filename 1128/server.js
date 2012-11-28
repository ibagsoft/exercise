var http = require('http'),
	fs = require('fs');

http.createServer(function(req,res) {
	var url = req.url.slice(1);
	fs.exists(url,function(exists) {
		if(exists){
			fs.readFile(url,'utf-8',function(error,data) {
				if(data){
					res.write(data);
					res.end();
				}
			});
		}
		else{
			if(url == 'todos'){
				var todos = [],i=1,length=3;
				for(;i<length;i++){
					todos.push({title:'Todo '+ i});
				}
				res.write(JSON.stringify(todos));
				res.end();
			}
		}
	});

}).listen(9432);
console.log('server start')