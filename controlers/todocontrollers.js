var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://traktors:Lazanja1@ds123029.mlab.com:23029/checkliste');
//var data = [{item: "pievienot google datubāzi" , name:"kautko citu ierakstīt"}, {item:"pievienot laiku", name:"kautko citu ierakstīt"}, {item:"pievienot serverī", name:"kautko citu ierakstīt"}];

var todoSchema = new mongoose.Schema({nummurs: Number, nosaukums: String, apraksts: String, rits: Boolean, diena: Boolean, vakars: Boolean});

var Todo = mongoose.model('Todo', todoSchema);
/*
var itemi = [
	{numurs: 1, nosaukums: "Štata vietas", apraksts: "ir nokomplektētas, visi ir ieradušies darbā", rits: true, diena: false, vakars: false},
	{numurs: 2, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)", rits: true, diena: false, vakars: true},
	{numurs: 3, nosaukums: "Prece ir piegādāta", apraksts: "vajadzīgajos daudzumos", rits: true, diena: false, vakars: false}

	];
for(let i=0;i<itemi.length;i++){
var itemPievienot = Todo(itemi[i]).save(function(err){
if(err) throw err;
console.log('item '+ [i] + ' saved')
});
};
*/
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
	
	app.get('/todo', function(req, res){

		Todo.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data});
			});
	});
	app.get('/iestatijumi', function(req, res){

		Todo.find({}, function(err,data){
			if(err) throw err;
			res.render('iestatijumi',{todos: data});
			});
	});
};