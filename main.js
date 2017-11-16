$(document).ready(function(){


var userSelection = [];

$('.selection-box').on('click', function(){
  $(this).addClass("clicked");
  if ($(this).hasClass("clicked")){
    userSelection = $(this).text();
    console.log(userSelection);
    if ($(userSelection).hasClass('.selection-box false')) {
      $('.selection-box').css('border','#56A589', 'color','#56A589');
      $('h2').css('color','#56A589');
      $('h2').text().replace("Correct");
    }
    else {
      $(this).css('border', '#DB6F6F', 'color','#DB6F6F');
      $('h2').css('color', '#DB6F6F');
      $('h2').text().replace("Wrong, Try Again");
    }
  }
});
