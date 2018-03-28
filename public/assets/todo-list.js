$(document).ready(function(){




  $('form').on('submit', function(){
      //var item = $('#staticText').val();
      //var todo = {item: item.val()};
       nummurs1: $('.nummurs').val()
var formData = {
      
      datums: $('#datums'+nummurs1).val(),
      cilveks: $('#cilveks'+nummurs1).val(),
      komercvieniba: $('#komercvieniba'+nummurs1).val(),
      nosaukums: $('#nosaukums'+nummurs1).val(),
      atbilde: $('#atbilde'+nummurs1).val(),
      atbilst: $('#atbilst'+nummurs1).val(),
      periods: $('#periods'+nummurs1).val(),
      condition: $('#condit'+nummurs1).val() 
      apraksts:$ ('#apraksts'+nummurs1).val(),
      nummurs: $('#nummurs'+nummurs1).val(),
        };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: formData,
        success: function(data){
          location.reload();
          //do something with the data via front-end framework
        }
      });
      return false;
      /*
      $('#form1').on('submit', function(){
      //var item = $('#staticText').val();
      //var todo = {item: item.val()};
      
var formData = {
      //nosaukums:$('#nosaukums').val(),
      nummurs: $('.nummurs').val()
      datums: $('.datums').val(),
      cilveks: $('.cilveks').val(),
      komercvieniba: $('.komercvieniba').val(),
      nosaukums: $('.nosaukums').val(),
      atbilde: $('.atbilde').val(),
      atbilst: $('.atbilst').val()
        };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: formData,
        success: function(data){
          //do something with the data via front-end framework
        }
      });
      return false;
  });
/*

/*$('#create').on('submit', function(){
      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/iestatijumi',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;
  });*/


/* $('#create').submit(function() { // catch the form's submit event

       var formData = {
        nosaukums: 'darbalaiks',
        sakums: $('#exampleInput').val(),
        beigas: $('#exampleInputPassword1').val()
        };

    $.ajax({ // create an AJAX call...
        data: formData,
        type: $(this).attr('POST'), // GET or POST
        url: $(this).attr('/iestatijumi'), // the file to call
        success: function(response) { // on success..
           console.log(this.data);
        }
    });
    return false; // cancel original event to prevent form submittin
      });
 */
});

/*$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
        }
      });

      return false;

    });
 });
 */