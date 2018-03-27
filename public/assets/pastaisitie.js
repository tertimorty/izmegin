function laikaf(){
var nosaukums = 'darbalaiks';
var sakums = document.getElementById("exampleInput").value;
var beigas = document.getElementById("exampleInputPassword1").value;

var formData = {'nosaukums':nosaukums, 'sakums':sakums, 'beigas':beigas}
console.log(sakums);
console.log(formData);

 $.ajax({ // create an AJAX call...
        data: formData,
        type: $(this).attr('POST'), // GET or POST
        url: $(this).attr('/iestatijumi'), // the file to call
        success: function(data) { // on success..
           console.log(this.data);
        }
    });
    return false; // cancel original event to prevent form submitting
};


        //Oauth ielogoshanas un izlogoshanas
    
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
       document.getElementById('logins').innerHTML = profile.getName();
         var d = new Date();
    var date1 = d.toLocaleDateString();


        for(let i =1; i<30; i++){
            let datumsExists = document.getElementById('datums'+i);
            if(datumsExists != null ){
                document.getElementById('datums'+i).value = date1; };
            let komercvienibaExists = document.getElementById('komercvieniba'+i);
            if(komercvienibaExists != null ){
                document.getElementById('komercvieniba'+i).value = "komercvieniba" };
            let cilveksExists = document.getElementById('cilveks'+i);
            if(cilveksExists != null ){
                document.getElementById('cilveks'+i).value = profile.getName(); };

            let periodsExists = document.getElementById('periods'+i);
            if(cilveksExists != null ){
                document.getElementById('periods'+i).value =  document.getElementById('dienasdalja').innerHTML };
};
    };
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        document.getElementById('logins').innerHTML = 'Izlogojies';
    
    };

  //custom scripts pogu krāsu mainīšanai
 function myFunction(ele){
    var id = ele.id;
    var i = id.replace('prmaPoga','');
    var idi = 'i'+id;
    console.log(idi);
    var idia = idi + 'area'
    var class1 = ele.className;
    
	console.log('area element id = ' + id + 'area element class = ' + class1);
		if (class1 == "btn btn-success") {
         document.getElementById(id).className = 'btn btn-danger';
         document.getElementById(id).innerHTML = 'Neatbilst';
         
         var  x = document.getElementsByClassName("Att"+id);
        document.getElementById('atbilst'+i).value = 'Neatbilst';
         
         console.log(x);
         x[0].style.display = 'flex';
    }
    else if ( class1 == "btn btn-warning" || class1 == "btn btn-danger"){
        
         document.getElementById(id).className = 'btn btn-success';
         document.getElementById(id).innerHTML = 'Atbilst';
          var  y = document.getElementsByClassName("Att"+id);
          document.getElementById('atbilst'+i).value = 'Atbilst';
         console.log(y);
         y[0].style.display = 'none';
    }
 }


	function tava(ele){
		var id = ele.id;
		var idComplete = 'completed'+id;
		var idUncomplete = 'uncompleted'+id;
		console.log(idComplete)};

          	
	function tavaFun(ele){
		var id = ele.id;
		id2 = 'prmaPoga' + id.substring(8);
		iid2 = 'i' + id2;
		var idComplete = 'completed'+id;
		var idUncomplete = 'uncompleted'+id;
		console.log(id2);
		document.getElementById(idComplete).style.display="list-item";
		document.getElementById(idUncomplete).style.display="none";
		console.log(id2);
		document.getElementById(iid2).disabled = true;

        



        
	}
	/*function tavaFun2(ele){
		var id = ele.id;
		id2 = 'prmaPoga' + id.substring(8);
		var idComplete = 'completed'+id;
		var idUncomplete = 'uncompleted'+id;
		console.log(idComplete);
		document.getElementById(idUncomplete).style.display="list-item";
		document.getElementById(idComplete).style.display="none";
		document.getElementById(id2).disabled = false;}; */


  function openWin() {
                     window.open("https://docs.google.com/a/lido.lv/forms/d/e/1FAIpQLSejR5Vmp7_kji-XWwe2GyoXMKmZs5EZVFpo89-G3Dxzyj2TFg/viewform");
            };
            function setingLogs () {
                  var myWindow = window.open ("./iestatijumi",
                    "mywindow","menubar=0,resizable=0,width=600px,height=600px");
   
            };
            function pamacibaLogs(){
                alert("ðeit ievietot pamâcîbu kâ lietot");
            };

            function setLaiku(){
                var d = new Date();
                var laiks = d.getHours();
               console.log(laiks);
                if(laiks > 7 && laiks < 11){
                    document.getElementById('dienasdalja').innerHTML = 'Rīts';
                    document.getElementById('periods').value = 'Rīts';}
                else if (laiks > 11 && laiks < 16){
                    document.getElementById('dienasdalja').innerHTML = 'Diena';
                    document.getElementById('periods').value = 'Diena';}
                else if (laiks > 16 && laiks < 23){
                    document.getElementById('dienasdalja').innerHTML = 'Vakars';
                    document.getElementById('periods').value = 'Vakars';}
                else {
                     document.getElementById('dienasdalja').innerHTML = 'Nav';
                }
            };





