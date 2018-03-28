var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://traktors:Lazanja1@ds123029.mlab.com:23029/checkliste');
var todoSchema = new mongoose.Schema({nummurs: Number, nosaukums: String, apraksts: String });
var todoSchema1 = new mongoose.Schema({at: String, datums: String, cilveks: String, komercvieniba: String, nosaukums: String, atbilde: String, atbilst: String, periods:String, condit:String, apraksts: String, nummurs: String});

var Todo1 = mongoose.model('Todo1', todoSchema1);
var Todo2 = mongoose.model('Todo2', todoSchema1);
var Todo = mongoose.model('Todo', todoSchema);

 /* var itemi1 = [
	{numurs: 1, nosaukums: "Štata vietas", apraksts: "ir nokomplektētas, visi ir ieradušies darbā"},
	{numurs: 2, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)"},
	{numurs: 3, nosaukums: "Prece ir piegādāta", apraksts: "vajadzīgajos daudzumos"},
	{numurs: 4, nosaukums: "Ražošans telpu sagatavotība", apraksts: "darba vietas ir tīras, aprīkojums, inventārs ir tīrs un atbilstošā tehniskā stāvoklī"},
	{numurs: 5, nosaukums: "Realizācijas laika kontrole", apraksts: "jāpārliecinās, ka darbinieki ir pārbaudījuši produktu derīguma termiņus, vai tiek ievērots FIFO princips"},
	{numurs: 6, nosaukums: "Pašražotā produkcija ir marķēta", apraksts: "atrodas tai paredzētajās vietās un ir marķēta ar atbistošu ražošanas datumu"},
	{numurs: 7, nosaukums: "Ikdienas ražošanas pierakstu veidlapas", apraksts: "ir aizpildītas un aizpildītas korekti"},
	{numurs: 8, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)"},
	{numurs: 9, nosaukums: "Produktu pasūtījums", apraksts: "nākamajām dienām ir veikts"},
	{numurs: 10, nosaukums: "Grīdas un sadales letes", apraksts: "Grīdas un sadales letes ir tīras"},
	{numurs: 11, nosaukums: "Aukstuma iekārtas", apraksts: "Vitrīnas, ledusskapji, dispenseri, alus aparāti- ir ieslēgtas un darbojas (no rīta), un ir izslēgtas, kur tas nepieciešams vakarā"},
	{numurs: 12, nosaukums: "Siltuma iekārtas", apraksts: "konvektori, pannas, sildvirsmas, marmīti, kafijas aparāti, trauku sildītāji, darbojas un ir ieslēgti (no rīta), un izslēgti, kur tas nepieciešams (vakarā)"},
	{numurs: 13, nosaukums: "Ledus vannas", apraksts: "ir piepildītas"},
	{numurs: 14, nosaukums: "Sortiments ir nodrošināts", apraksts: "Atbilstoši standartam - sortimenta nodrošinājums pa stundām"},
	{numurs: 15, nosaukums: "Individuālās lietošanas trauki", apraksts: "ir nodrošināti"},
	{numurs: 16, nosaukums: "Produktu izvietojums", apraksts: "sadalē nodrošināts pēc vadītāja norādījumiem"},
	{numurs: 17, nosaukums: "Produktu degustācija", apraksts: "ir veikta, produktu kvalitāte ir atbilstoša, ja nepieciešams noteiktas orektīvas darbības"},
	{numurs: 18, nosaukums: "Produktu temperatūras kontrole", apraksts: "ir veikta"},
	{numurs: 19, nosaukums: "Cenu zīmes un reklāmas materiāli", apraksts: "ir izvietoti atbilstoši sortimentam"},
	{numurs: 20, nosaukums: "Vakara sadales fotofiksācija", apraksts: "ir veikta un foto ir nosūtīts"},
	{numurs: 21, nosaukums: "Sadalē un ražošanā neuzglabājas produkti", apraksts: "Pēc darbadienas beigām sadalē un ražošanas telpās neuzglabājas produkti"},
	{numurs: 22, nosaukums: "Tīrība", apraksts: "Grīdas un galdiņi ir tīri, noformējums un reklāmas....."},
	{numurs: 23, nosaukums: "Klientu tualetes", apraksts: " Ir sagatavotas un ir tīras, ir nodrošinātas ar tualetes papīru u.t.t"},
	{numurs: 24, nosaukums: "Kases zona", apraksts: "kases zona ir tīra, galda piederumi, salvetes, reklāmas materiāli, papildpirkuma preces ir izvietotas"},
	{numurs: 25, nosaukums: "Ikr;ita 5-min sapulce", apraksts: "ir novadīta....."},
	{numurs: 26, nosaukums: "Kolēģiem ir nodota aktuālā informācija", apraksts: ""},
	];


for(let i=0;i<itemi1.length;i++){
var itemPievienot = Todo2(itemi1[i]).save(function(err){
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

		Todo2.find({}, function(err,data){
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
		var cilveks = req.body.cilveks;
		var komercvieniba = req.body.komercvieniba;
		var nosaukums = req.body.nosaukums;
		var atbilde = req.body.atbilde;
		var atbilst = req.body.atbilst;
		var periods = req.body.periods;
		var apraksts = req.body.apraksts;



	/////
		console.log(req.body);
		
		var query = {'nosaukums': nosaukums};

		Todo2.findOneAndUpdate(query, {$set:{condit: 'Izpildīts', datums: datums, atbilde: atbilde, periods: 'Diena', apraksts: apraksts, nosaukums: nosaukums, cilveks: '', komercvieniba: komercvieniba,  }}, {new: false}, function (err,data){
				if(err) throw err;

			Todo2.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data});
			});
			});  
/*
			var itemPievienot = Todo2(req.body).save({new: false}, function(err,data){
			if(err) throw err;
			res.json(data);
			}); */ 
	});
};

	
