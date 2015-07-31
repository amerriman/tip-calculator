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

  // function calculator(price, amount){

  // }



  $('#calculate').on("click", function(event){
    event.preventDefault();
    //take the value of the bill total and replace the money sign with nothing
    var bill = $('#bill').val().replace("$", "");
    //hold the value of the tip percent they chose
    var tipPercent = $('#tipAmount').val();
    //if they didn't choose a percent, it will automatically be 18
    if(tipPercent === null){
      tipPercent = 18;
    }
    //the amount they should tip will be caluclated with the cost of the bill, times the percent chosen, divided by 100 and it will always show 2 characters after the decimal point
    var tipAmount = (bill * tipPercent / 100).toFixed(2);

    //appends the tip amount to the screen
    $('#showAmount').html("You should tip " + "$"+tipAmount);
  });

});
