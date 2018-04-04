$(document).ready(function(){


  $('form').on('submit', function(){
      //var item = $('#staticText').val();
      //var todo = {item: item.val()};
     var user_id = $(this).closest("form").attr('id');
      
      var tabId = user_id.split("form").pop();
     
      var formData = {
        datums: $('#datums'+tabId).val(),
        cilveks: $('#cilveks'+tabId).val(),
        komercvieniba: $('#komercvieniba'+tabId).val(),
        nosaukums: $('#nosaukums'+tabId).val(),
        atbilde: $('#atbilde'+tabId).val(),
        atbilst: $('#atbilst'+tabId).val(),
        periods: $('#periods'+tabId).val(),
        apraksts:$ ('#apraksts'+tabId).val(),
        nummurs: $('#nummurs'+tabId).val()
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
  });
});

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