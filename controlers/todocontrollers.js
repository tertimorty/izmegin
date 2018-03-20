var bodyParser = require('body-parser');
var data = [{item: "pievienot google datubāzi" , name:"kautko citu ierakstīt"}, {item:"pievienot laiku", name:"kautko citu ierakstīt"}, {item:"pievienot serverī", name:"kautko citu ierakstīt"}];


var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

	app.get('/todo', function(req, res){
		res.render('todo',{todos: data});

	});
	app.post('/todo', urlencodedParser, function(req, res){

		data.push(req.body);
		res.render('todo', {todos: data});
		response.json(data);
		
	});
	app.delete('/todo/:item', function(req, res){
		data = data.filter(function(todo){
			return todo.item.replace(/ /g,'-') !== req.params.item;
		});
		res.json(data);
		res.render("todo", { todos: data });
	});
};