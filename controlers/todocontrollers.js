var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://traktors:Lazanja1@ds123029.mlab.com:23029/checkliste');
var todoSchema = new mongoose.Schema({nummurs: Number, nosaukums: String, apraksts: String });
var todoSchema1 = new mongoose.Schema({datums: String, nummurs: Number, cilveks: String, komercvieniba: String, nosaukums: String, apraksts: String, rits: String, ritsAtbilde: String, ritsStavoklis: String, diena: String, dienaAtbilde: String, dienaStavoklis: String, vakars: String, vakarsAtbilde: String, vakarsStavoklis: String});

var Todo1 = mongoose.model('Todo1', todoSchema1);
var Todo2 = mongoose.model('Todo2', todoSchema1);
var Todo = mongoose.model('Todo', todoSchema);
/*
 var itemi1 = [

 	{datums:'', numurs: 1, cilveks:'', komercvieniba:'',  nosaukums: "Štata vietas", apraksts: "ir nokomplektētas, visi ir ieradušies darbā", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 2, cilveks:'', komercvieniba:'',  nosaukums: "Darbinieku vizuālais tēls", apraksts: "atbilst viesmīlības standartā noteiktajam (tīra forma, vārda nozīmīte)", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 3, cilveks:'', komercvieniba:'',  nosaukums: "Prece ir piegādāta", apraksts: "vajadzīgajos daudzumos", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},

	{datums:'', numurs: 4, cilveks:'', komercvieniba:'',  nosaukums: "Ražošans telpu sagatavotība", apraksts: "darba vietas ir tīras, aprīkojums, inventārs ir tīrs un atbilstošā tehniskā stāvoklī", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 5, cilveks:'', komercvieniba:'',  nosaukums: "Realizācijas laika kontrole", apraksts: "jāpārliecinās, ka darbinieki ir pārbaudījuši produktu derīguma termiņus, vai tiek ievērots FIFO princips", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 6, cilveks:'', komercvieniba:'',  nosaukums: "Pašražotā produkcija ir marķēta", apraksts: "atrodas tai paredzētajās vietās un ir marķēta ar atbistošu ražošanas datumu", rits: "", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 7, cilveks:'', komercvieniba:'',  nosaukums: "Ikdienas ražošanas pierakstu veidlapas", apraksts: "ir aizpildītas un aizpildītas korekti", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 9, cilveks:'', komercvieniba:'',  nosaukums: "Produktu pasūtījums", apraksts: "nākamajām dienām ir veikts", rits: "", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},

	{datums:'', numurs: 10, cilveks:'', komercvieniba:'',  nosaukums: "Grīdas un sadales letes", apraksts: "Grīdas un sadales letes ir tīras", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 11, cilveks:'', komercvieniba:'',  nosaukums: "Aukstuma iekārtas", apraksts: "Vitrīnas, ledusskapji, dispenseri, alus aparāti- ir ieslēgtas un darbojas (no rīta), un ir izslēgtas, kur tas nepieciešams vakarā", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 12, cilveks:'', komercvieniba:'',  nosaukums: "Siltuma iekārtas", apraksts: "konvektori, pannas, sildvirsmas, marmīti, kafijas aparāti, trauku sildītāji, darbojas un ir ieslēgti (no rīta), un izslēgti, kur tas nepieciešams (vakarā)", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 13, cilveks:'', komercvieniba:'',  nosaukums: "Ledus vannas", apraksts: "ir piepildītas", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 14, cilveks:'', komercvieniba:'',  nosaukums: "Sortiments ir nodrošināts", apraksts: "Atbilstoši standartam - sortimenta nodrošinājums pa stundām", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 15, cilveks:'', komercvieniba:'',  nosaukums: "Individuālās lietošanas trauki", apraksts: "ir nodrošināti", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 16, cilveks:'', komercvieniba:'',  nosaukums: "Produktu izvietojums", apraksts: "sadalē nodrošināts pēc vadītāja norādījumiem", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 17, cilveks:'', komercvieniba:'',  nosaukums: "Produktu degustācija", apraksts: "ir veikta, produktu kvalitāte ir atbilstoša, ja nepieciešams noteiktas orektīvas darbības", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 18, cilveks:'', komercvieniba:'',  nosaukums: "Produktu temperatūras kontrole", apraksts: "ir veikta", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 19, cilveks:'', komercvieniba:'',  nosaukums: "Cenu zīmes un reklāmas materiāli", apraksts: "ir izvietoti atbilstoši sortimentam", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 27, cilveks:'', komercvieniba:'',  nosaukums: "Produkta vizuālais izkārtojums un izskats", apraksts: "atbilst", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 20, cilveks:'', komercvieniba:'',  nosaukums: "Vakara sadales fotofiksācija", apraksts: "ir veikta un foto ir nosūtīts", rits: "", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 21, cilveks:'', komercvieniba:'',  nosaukums: "Sadalē un ražošanā neuzglabājas produkti", apraksts: "Pēc darbadienas beigām sadalē un ražošanas telpās neuzglabājas produkti", rits: "", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},

	{datums:'', numurs: 22, cilveks:'', komercvieniba:'',  nosaukums: "Klientu zonas gatavība", apraksts: "Grīdas un galdiņi ir tīri, noformējums un reklāmas.....", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 23, cilveks:'', komercvieniba:'',  nosaukums: "Klientu tualetes", apraksts: " Ir sagatavotas un ir tīras, ir nodrošinātas ar tualetes papīru u.t.t", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "diena", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},

	{datums:'', numurs: 24, cilveks:'', komercvieniba:'',  nosaukums: "Kases zona", apraksts: "kases zona ir tīra, galda piederumi, salvetes, reklāmas materiāli, papildpirkuma preces ir izvietotas", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 25, cilveks:'', komercvieniba:'',  nosaukums: "Ikrīta 5-min sapulce", apraksts: "ir novadīta, nodota informācija par izmaiņām sortimentā, jauniem produktiem, akcijām, dienas uzdevumiem u.c.", rits: "rits", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "", vakarsAtbilde: '', vakarsStavoklis: ''},
	{datums:'', numurs: 26, cilveks:'', komercvieniba:'',  nosaukums: "Kolēģiem ir nodota aktuālā informācija", apraksts: "maiņu nododot", rits: "", ritsAtbilde: '', ritsStavoklis: '', diena: "", dienaAtbilde: '', dienaStavoklis: '', vakars: "vakars", vakarsAtbilde: '', vakarsStavoklis: ''},
	

	];

for(let i=0;i<itemi1.length;i++){
var itemPievienot = Todo2(itemi1[i]).save(function(err){
if(err) throw err;
console.log('item '+ [i] + ' saved')
});
}; 

/*
var item1 = {nosaukums:'darbalaiks', sakums:8, beigas:22};
var itemPievienot = Todo1(item1).save(function(err){
if(err) throw err;
console.log('item saved')
});
*/

//prieksh formu genereshan
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

/*
var laiks = '';
	app.post('/laiks', urlencodedParser, function(req, res){
		laiks = req.body.laiks;
	
	console.log('laiks ir: ' + laiks);
	});

  */
	app.get('/todo', function(req, res){


	var dalja = '';
 	let d = new Date();

 	
    let laiks = d.getHours() +3 ;
    
    if ( laiks <= 12){
    	console.log("izpildarits");
         dalja = 'rits'}
    else if (laiks >= 12 && laiks < 15){
    	console.log("izpildadiena");
        dalja = 'diena'}
    else if (laiks >= 15 && laiks <  24){
    	console.log("izpildavakars");
        dalja = 'vakars'} 
//datums iso formātā, lai var atfiltrēti tikai shodien aizpildītos

		var today = new Date().toISOString().split('T')[0];
		
		console.log(dalja);

		Todo2.find({
			$or:[
          		{ $and: [{datums: ''}, {rits: dalja}] },
          		{ $and: [{datums: ''}, {diena: dalja}] },
          		{ $and: [{datums: ''}, {vakars: dalja}] },
          		{ $and: [{datums: today}, {rits: dalja}] },
          		{ $and: [{datums: today}, {diena: dalja}] },
          		{ $and: [{datums: today}, {vakars: dalja}] }
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
		Todo2.find({
          		 	datums: {$ne: []},
					}, function(err,data){
						if(err) throw err;
						res.render('apkopojums',{todos: data});
						}); 
				});


	app.post('/todo', urlencodedParser, function(req, res){


		 	var datums = req.body.datums;
		  	var nummurs = req.body.nummurs;
		  	var cilveks = req.body.cilveks;
		  	var komercvieniba = req.body.komercvieniba;
		  	var nosaukums = req.body.nosaukums;
		  	var apraksts = req.body.apraksts;
		  	var rits = req.body.rits;
		  	var ritsAtbilde = req.body.ritsAtbilde;
		  	var ritsStavoklis = req.body.ritsStavoklis;
		  	var diena = req.body.diena;
		  	var dienaAtbilde = req.body.dienaAtbilde;
		  	var dienaStavoklis = req.body.dienaStavoklis;
		  	var vakars = req.body.vakars;
		  	var vakarsAtbilde = req.body.vakarsAtbilde;
		  	var vakarsStavoklis = req.body.vakarsStavoklis;

		  	var sanemDatums = req.body.datums;
		  	var sanemNosaukums = req.body.nosaukums;

		  		console.log(sanemDatums);
		  		console.log(sanemNosaukums);

		//console.log('nosaukums:  ' + nosaukums + ' datums:  ' + datums + ' atbilst: ' + atbilst + ' periods: '  + periods);
		console.log(req.body);
	//var itemPievienot = Todo2(req.body).save({new: true}, function(err,data){
			//if(err) throw err;
			//console.log(req.body);
			//res.json(data);
			//});	
		
		var query = { 
            	$and: [{datums: sanemDatums}, {nosaukums: sanemNosaukums}]
 			};

		Todo2.findOneAndUpdate(query, 
		{$set:{

		 'datums': datums,
		  	'nummurs': nummurs,
		  	'cilveks': cilveks,
		  	'komercvieniba': komercvieniba,
		  	'nosaukums': nosaukums,
		  	'apraksts': apraksts,
		  	'rits': rits,
		  	'ritsAtbilde': ritsAtbilde,
		  	'ritsStavoklis': ritsStavoklis,
		  	'diena': diena,
		  	'dienaAtbilde': dienaAtbilde,
		  	'dienaStavoklis': dienaStavoklis,
		  	'vakars': vakars,
		  	'vakarsAtbilde': vakarsAtbilde,
		  	'vakarsStavoklis': vakarsStavoklis


		}}, { upsert: true }, function (err,data){
				if(err) throw err;
				res.json(data);
			}); 
})};  
			

//};
