
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var todos = [],i=0,length=3;
	for(;i<length;i++){
		todos.push({title:"Todo " + i});
	}
  res.send(todos);
};