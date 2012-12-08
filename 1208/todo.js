var Todo = Backbone.Model.extend();
var Todos = Backbone.Collection.extend({
	model:Todo,
	localStorage:new Store('todos')
});
var todos = new Todos();
var Todo_View = Backbone.View.extend({
	el:$('#todo'),
	initialize:function() {
		console.log();
		_.bindAll(this,'addAll');
		this.input = $('#new_todo');
		todos.bind('reset',this.addAll);
		todos.fetch();
	},
	events:{
		'keypress #new_todo':'addOne'
	},
	addAll:function() {
		var that = this;
		todos.each(function(todo) {
			var li_template = "<li><%=title%></li>";
			var tmpl = _.template(li_template);
			var li = tmpl(todo.toJSON());
			that.$el.append(li);
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