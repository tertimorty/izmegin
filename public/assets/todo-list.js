$(document).ready(function(){

  $('form').on('submit', function(){
      var item = $('form input');

      var todo = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/iestatijumi',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
     
        }
      });
      return false;
  });


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


$(document).ready(function(){

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

  