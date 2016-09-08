console.log('public script sourced');

$(document).ready(function(){
  console.log('jq working');
  $('#sendInfo').on('click', function(){
    console.log('in click');
    var objectToSend = {
      thing: $('#nameIn').val(),
      otherThing: $('#otherIn').val()
    };
    console.log();
    $.ajax({
      type: 'POST',
      url: '/pathName',
      data: objectToSend,
      success: function(data){
        console.log(data);
        $('#outDiv').append('<p>' + data.thing + ' ' + data.otherThing + '</p>');
      }
    });
  });
});
