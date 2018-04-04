var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://traktors:Lazanja1@ds123029.mlab.com:23029/checkliste');
var todoSchema = new mongoose.Schema({nummurs: Number, nosaukums: String, apraksts: String });
var todoSchema1 = new mongoose.Schema({datums: String, cilveks: String, komercvieniba: String, atbilde: String, atbilst: String, periods: String, nummurs: String, nosaukums: String, apraksts: String});

var Todo1 = mongoose.model('Todo1', todoSchema1);
var Todo2 = mongoose.model('Todo2', todoSchema1);
var Todo = mongoose.model('Todo', todoSchema);
/*
 var itemi1 = [

 	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 1, nosaukums: "Štata vietas", apraksts: "ir nokomplektētas, visi ir ieradušies darbā"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 2, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 3, nosaukums: "Prece ir piegādāta", apraksts: "vajadzīgajos daudzumos"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 4, nosaukums: "Ražošans telpu sagatavotība", apraksts: "darba vietas ir tīras, aprīkojums, inventārs ir tīrs un atbilstošā tehniskā stāvoklī"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 5, nosaukums: "Realizācijas laika kontrole", apraksts: "jāpārliecinās, ka darbinieki ir pārbaudījuši produktu derīguma termiņus, vai tiek ievērots FIFO princips"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 6, nosaukums: "Pašražotā produkcija ir marķēta", apraksts: "atrodas tai paredzētajās vietās un ir marķēta ar atbistošu ražošanas datumu"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 7, nosaukums: "Ikdienas ražošanas pierakstu veidlapas", apraksts: "ir aizpildītas un aizpildītas korekti"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 8, nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 9, nosaukums: "Produktu pasūtījums", apraksts: "nākamajām dienām ir veikts"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 10, nosaukums: "Grīdas un sadales letes", apraksts: "Grīdas un sadales letes ir tīras"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 11, nosaukums: "Aukstuma iekārtas", apraksts: "Vitrīnas, ledusskapji, dispenseri, alus aparāti- ir ieslēgtas un darbojas (no rīta), un ir izslēgtas, kur tas nepieciešams vakarā"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 12, nosaukums: "Siltuma iekārtas", apraksts: "konvektori, pannas, sildvirsmas, marmīti, kafijas aparāti, trauku sildītāji, darbojas un ir ieslēgti (no rīta), un izslēgti, kur tas nepieciešams (vakarā)"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 13, nosaukums: "Ledus vannas", apraksts: "ir piepildītas"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 14, nosaukums: "Sortiments ir nodrošināts", apraksts: "Atbilstoši standartam - sortimenta nodrošinājums pa stundām"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 15, nosaukums: "Individuālās lietošanas trauki", apraksts: "ir nodrošināti"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 16, nosaukums: "Produktu izvietojums", apraksts: "sadalē nodrošināts pēc vadītāja norādījumiem"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 17, nosaukums: "Produktu degustācija", apraksts: "ir veikta, produktu kvalitāte ir atbilstoša, ja nepieciešams noteiktas orektīvas darbības"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 18, nosaukums: "Produktu temperatūras kontrole", apraksts: "ir veikta"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 19, nosaukums: "Cenu zīmes un reklāmas materiāli", apraksts: "ir izvietoti atbilstoši sortimentam"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 20, nosaukums: "Vakara sadales fotofiksācija", apraksts: "ir veikta un foto ir nosūtīts"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 21, nosaukums: "Sadalē un ražošanā neuzglabājas produkti", apraksts: "Pēc darbadienas beigām sadalē un ražošanas telpās neuzglabājas produkti"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 22, nosaukums: "Tīrība", apraksts: "Grīdas un galdiņi ir tīri, noformējums un reklāmas....."},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 23, nosaukums: "Klientu tualetes", apraksts: " Ir sagatavotas un ir tīras, ir nodrošinātas ar tualetes papīru u.t.t"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 24, nosaukums: "Kases zona", apraksts: "kases zona ir tīra, galda piederumi, salvetes, reklāmas materiāli, papildpirkuma preces ir izvietotas"},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 25, nosaukums: "Ikrīta 5-min sapulce", apraksts: "ir novadīta....."},
	{datums:'', cilveks:'', komercvieniba:'', atbilde:'', atbilst:'', periods:'', condit: '', numurs: 26, nosaukums: "Kolēģiem ir nodota aktuālā informācija", apraksts: ""},

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
	var dalja = '';
 	let d = new Date();
    let laiks = d.getHours();
    if ( laiks <= 11){
         dalja = 'Rīts'}
    else if (laiks > 11 && laiks < 16){
        dalja = 'Diena'}
    else if (laiks > 16 && laiks <  23){
        dalja = 'Vakars'}
       console.log(dalja);
//datums iso formātā, lai var atfiltrēti tikai shodien aizpildītos

		var today = new Date().toISOString().split('T')[0];
		console.log(today);

		Todo2.find({
			$or:[
          		//{ $and: [{datums: ''}, {periods: ''}] },
          		{ $and: [{datums: today}, {periods: dalja}] }
      			]
		}, function(err,data){
			if(err) throw err;

			res.render('todo',{todos: data});
			
			});
	});

	app.get('/iestatijumi', function(req, res){
		Todo1.find({}, function(err,data){
			if(err) throw err;
			res.render('iestatijumi',{todos: data});
			}); 
	});


	app.get('/apkopojums', function(req, res){
		Todo2.find({}, function(err,data){
			if(err) throw err;
			res.render('apkopojums',{todos: data});
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
		var condit = ""

var itemPievienot = Todo2(req.body).save({new: true}, function(err,data){
			if(err) throw err;
			console.log(req.body);
			res.json(data);
			});

	/////
		
		/*
		var query = {'nosaukums': nosaukums};

		Todo2.findOneAndUpdate(query, {$set:{condit: 'Izpildīts', datums: datums, atbilde: atbilde, periods: 'Diena', apraksts: apraksts, nosaukums: nosaukums, cilveks: '', komercvieniba: komercvieniba,  }}, {new: false}, function (err,data){
				if(err) throw err;

			Todo2.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data});
			});
			});  

			 */ 
	});
};

	
