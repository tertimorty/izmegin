
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
    var idi = 'i'+id;
    var idia = idi + 'area'
    var class1 = ele.className;
    console.log(class1); 
	console.log('area element id = ' + id + 'area element class = ' + class1);
		if (class1 == "btn btn-success") {
         document.getElementById(id).className = 'btn btn-danger';
         document.getElementById(id).innerHTML = 'Neatbilst';
         document.getElementById(idi).className = 'btn btn-danger';
         document.getElementById(idi).innerHTML = 'Neatbilst';
         var  x = document.getElementsByClassName("Att"+id);
         console.log(x);
         x[0].style.display = 'flex';
    }
    else if ( class1 == "btn btn-warning" || class1 == "btn btn-danger"){
         document.getElementById(idi).className = 'btn btn-success';
         document.getElementById(idi).innerHTML = 'Atbilst';
         document.getElementById(id).className = 'btn btn-success';
         document.getElementById(id).innerHTML = 'Atbilst';
          var  y = document.getElementsByClassName("Att"+id);
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
	function tavaFun2(ele){
		var id = ele.id;
		id2 = 'prmaPoga' + id.substring(8);
		var idComplete = 'completed'+id;
		var idUncomplete = 'uncompleted'+id;
		console.log(idComplete);
		document.getElementById(idUncomplete).style.display="list-item";
		document.getElementById(idComplete).style.display="none";
		document.getElementById(id2).disabled = false;};
