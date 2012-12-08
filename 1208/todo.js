var Todo = Backbone.Model.extend();
var Todos = Backbone.Collection.extend({
	model:Todo,
	localStorage:new Store('todos')
});
var todos = new Todos();
var Todo_View = Backbone.View.extend({
	el:$('#todo'),
	tmpl:_.template("<li><%=title%></li>"),
	initialize:function() {
		console.log();
		_.bindAll(this,'addAll','addOne');
		this.input = $('#new_todo');
		todos.bind('reset',this.addAll);
		todos.bind('add',this.addOne);
		todos.fetch();
	},
	events:{
		'keypress #new_todo':'enterTodo'
	},
	addOne:function(todo) {
		var li = this.tmpl(todo.toJSON());
		this.$el.append(li);
	},
	addAll:function() {
		var that = this;
		todos.each(function(todo) {
			that.addOne(todo);
		});
	},
	enterTodo:function(e) {
		if(e.keyCode != 13)
			return;
		var input = this.input;
		var todo = new Todo({title:input.val()});

		todos.create(todo);
		input.val('');
	}
});
var todo_view = new Todo_View();