$(function() {
	var Todo = Backbone.Model.extend();
	var Todos = Backbone.Collection.extend({
		model:Todo,
		localStrage:new Store('todos')
	});
	var todos = new Todos();
	var Item_View = Backbone.View.extend({
		tagName:'li',
		className:'btn btn-large',
		initialize:function() {
			this.render();
		},
		// tmpl:_.template($('#item_template').html()),
		tmpl:_.template("<%=title%>"),
		render:function() {
			this.$el.html(this.tmpl(this.model.toJSON()));
			return this;
		}
	});
	var Todo_View = Backbone.View.extend({
		el:$('#todo'),
		initialize:function() {
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
			var item = new Item_View({model:todo});
			this.$el.append(item.el);
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
});