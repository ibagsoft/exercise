var Todo = Backbone.Model.extend();
var Todos = Backbone.Collection.extend({
	model:Todo,
	localStorage:new Store('todos')
});
var todos = new Todos();
var Todo_View = Backbone.View.extend({
	el:$('#todo'),
	initialize:function() {
		this.input = $('#new_todo');
		todos.bind('reset',this.addAll);
		todos.fetch();
	},
	events:{
		'keypress #new_todo':'addOne'
	},
	addAll:function() {
		todos.each(function(todo) {
			console.log(todo.get('title'));
		});
	},
	addOne:function(e) {
		if(e.keyCode != 13)
			return;
		var input = this.input;
		console.log(input.val());
		input.val('');
	}
});
var todo_view = new Todo_View();