// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  // $('#calculate').on("click", function(event){
  //   event.preventDefault();
  //   //take the bill total
  //   var bill = $('#bill').val().replace("$", "");
  //   var tipAmount = (bill * 20 / 100).toFixed(2);
  //   $('#showAmount').html("You should tip " + "$"+tipAmount);

  // });

$('#calculate').on("click", function(event){
    event.preventDefault();
    //take the bill total
    var bill = $('#bill').val().replace("$", "");
    var tipPercent = $('#tipAmount').val();
    if(tipPercent === null){
      tipPercent = 18;
    }
    var tipAmount = (bill * tipPercent / 100).toFixed(2);
    $('#showAmount').html("You should tip " + "$"+tipAmount);

  });


});
