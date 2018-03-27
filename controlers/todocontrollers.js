var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://traktors:Lazanja1@ds123029.mlab.com:23029/checkliste');
//var todoSchema = new mongoose.Schema({nummurs: Number, nosaukums: String, apraksts: String, rits: Boolean, diena: Boolean, vakars: Boolean});
var todoSchema1 = new mongoose.Schema({at: String, datums: String, cilveks: String, komercvieniba: String, nosaukums: String, atbilde: String, atbilst: String, periods:String, condit:String, apraksts: String, nummurs: String});

var Todo1 = mongoose.model('Todo1', todoSchema1);
//var Todo = mongoose.model('Todo', todoSchema);
/*
var itemi = [
	{numurs: 1, nosaukums: "Štata vietas", apraksts: "ir nokomplektētas, visi ir ieradušies darbā", rits: true, diena: false, vakars: false},
	{numurs: 2, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)", rits: true, diena: false, vakars: true},
	{numurs: 3, nosaukums: "Prece ir piegādāta", apraksts: "vajadzīgajos daudzumos", rits: true, diena: false, vakars: false}
	];

var itemi1 = [
	{numurs: 4, nosaukums: "Ražošans telpu sagatavotība", apraksts: "darba vietas ir tīras, aprīkojums, inventārs ir tīrs un atbilstošā tehniskā stāvoklī", rits: true, diena: false, vakars: true},
	{numurs: 5, nosaukums: "Realizācijas laika kontrole", apraksts: "jāpārliecinās, ka darbinieki ir pārbaudījuši produktu derīguma termiņus, vai tiek ievērots FIFO princips", rits: true, diena: false, vakars: false},
	{numurs: 6, nosaukums: "Pašražotā produkcija ir marķēta", apraksts: "atrodas tai paredzētajās vietās un ir marķēta ar atbistošu ražošanas datumu", rits: false, diena: false, vakars: true},
	{numurs: 7, nosaukums: "Ikdienas ražošanas pierakstu veidlapas", apraksts: "ir aizpildītas un aizpildītas korekti", rits: true, diena: true, vakars: true},
	{numurs: 8, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)", rits: true, diena: false, vakars: true},
	{numurs: 9, nosaukums: "Produktu pasūtījums", apraksts: "nākamajām dienām ir veikts", rits: false, diena: true, vakars: false}
	]


for(let i=0;i<itemi1.length;i++){
var itemPievienot = Todo(itemi1[i]).save(function(err){
if(err) throw err;
console.log('item '+ [i] + ' saved')
});
};

var item1 = {nosaukums:'darbalaiks', sakums:8, beigas:22};
var itemPievienot = Todo1(item1).save(function(err){
if(err) throw err;
console.log('item saved')
});
*/

//prieksh formu genereshanas 
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

	app.get('/todo', function(req, res){

		Todo1.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data});
			});
	});

	app.get('/iestatijumi', function(req, res){
		Todo1.find({nosaukums:'darbalaiks'}, function(err,data){
			if(err) throw err;
			res.render('iestatijumi',{todos: data});
			}); 
	});

	app.post('/todo', urlencodedParser, function(req, res){
		var nosaukums = req.body.nosaukums;
		var datums = req.body.datums;



	/////
		console.log(req.body);
		
		var query = {'nosaukums': nosaukums};
		
		Todo1.findOneAndUpdate(query, {$set:{condit: 'hg', datums: datums}}, {new: false}, function (err,data){
				if(err) throw err;

			Todo1.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data});
			});
			});  
	});
};

	/*var itemPievienot = Todo1(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
			}); */
