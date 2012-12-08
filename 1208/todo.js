/*$(function() {
	$('#new_todo').bind('keypress',function() {
		var new_todo = $('#new_todo');
		console.log(new_todo.val());
		// new_todo.val('');
	});
})*/

var Todo_View = ChinaCache.View.extend({
	el:$('#todo'),
	events:{
		'keypress #new_todo':'addOne'
	},
	addOne:function(e) {
		if(e.keyCode != 13)
			return;
		
		var input = $('#new_todo');
		console.log(input.val());
		input.val('');
	}
});

var todo_view = new Todo_View;