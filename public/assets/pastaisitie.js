
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.   
document.getElementById('logins').innerHTML = profile.getName();   

 for(let i =1; i<80; i++){
    console.log(i);
    let pirmExists = document.getElementById('uncompletedotraPoga'+i);
    if(pirmExists != null ){
        let nosaukums1 = document.getElementById('nosaukums'+i).value;
       
        for(let j =1; j<80; j++){
           
            let compExists = document.getElementById('completedotraPoga'+j);
            let nosaukums = '';
            if(compExists != null ){
            nosaukums = document.getElementById('completedNosaukums'+j).innerHTML;}
        
            if(nosaukums1 === nosaukums){
                 j = 80

            }else if (j == 79){
                document.getElementById('uncompletedotraPoga'+i).style.display="list-item";
            }  
        }

    }
 }

console.log('shis vispar strada');
let d = new Date();
    let laiks = d.getHours();
 $.ajax({
        type: 'POST',
        url: '/laiks',
        data: {laiks: laiks},
        });


 for(let i =1; i<100; i++){
  let cilveksExists = document.getElementById('cilveks'+i);
        if(cilveksExists != null ){
            document.getElementById('cilveks'+i).value = profile.getName(); };};


};
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    document.getElementById('logins').innerHTML = 'Izlogojies';
};
function myFunction(ele){
    let id = ele.id;
    let i = id.replace('prmaPoga','');
    let atbilstID = 'atbilst'+i
    
    let class1 = ele.className;
    let  x = document.getElementsByClassName("Att"+id);
    
	if (class1 == "btn btn-success"){
        document.getElementById(id).className = 'btn btn-danger';
        document.getElementById(id).innerHTML = 'Neatbilst'; 
        document.getElementById(atbilstID).value = 'Neatbilst';
        x[0].style.display = 'flex';
    }
    else if ( class1 == "btn btn-warning" || class1 == "btn btn-danger"){    
        document.getElementById(id).className = 'btn btn-success';
        document.getElementById(id).innerHTML = 'Atbilst';
        document.getElementById(atbilstID).value = 'Atbilst';
        x[0].style.display = 'none';
    }
 };
function tava(ele){
	var id = ele.id;
	var idComplete = 'completed'+id;
	var idUncomplete = 'uncompleted'+id;
	
};
       	
	function tavaFun(ele){
		var id = ele.id;
		id2 = 'prmaPoga' + id.substring(8);
		iid2 = 'i' + id2;
		var idComplete = 'completed'+id;
		var idUncomplete = 'uncompleted'+id;
		
		document.getElementById(idComplete).style.display="list-item";
		document.getElementById(idUncomplete).style.display="none";
		
		document.getElementById(iid2).disabled = true;
    
};

function openWin() {
    window.open("https://docs.google.com/a/lido.lv/forms/d/e/1FAIpQLSejR5Vmp7_kji-XWwe2GyoXMKmZs5EZVFpo89-G3Dxzyj2TFg/viewform");
};
function setingLogs () {
    let myWindow = window.open ("./iestatijumi","mywindow","menubar=0,resizable=0,width=600px,height=600px"); 
};
function pamacibaLogs(){
    alert("ðeit ievietot pamâcîbu kâ lietot");
};

function uzliktLaiku(){
              
    let d = new Date();
    let laiks = d.getHours();
    console.log('laiks ir: ' + laiks);
    if ( laiks <= 12){
        document.getElementById('dienasdalja').innerHTML = 'Rīts'}
    else if (laiks > 12 && laiks < 15){
        document.getElementById('dienasdalja').innerHTML = 'Diena'}
    else if (laiks > 15 && laiks <  23){
        document.getElementById('dienasdalja').innerHTML = 'Vakars'}
    else {
         document.getElementById('dienasdalja').innerHTML = 'Nav'}
    


    let date1 = d.toISOString().split('T')[0];
    
    for(let i =1; i<100; i++){
        let datumsExists = document.getElementById('datums'+i);
        if(datumsExists != null ){
            document.getElementById('datums'+i).value = date1; };
        let komercvienibaExists = document.getElementById('komercvieniba'+i);
        if(komercvienibaExists != null ){
            document.getElementById('komercvieniba'+i).value = "komercvieniba" };
      
        let periodsExists = document.getElementById('periods'+i);
        if(periodsExists != null ){
            document.getElementById('periods'+i).value =  document.getElementById('dienasdalja').innerHTML };
    };

};
