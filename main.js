$(document).ready(function(){


var userSelection = [];

$('.selection-box').on('click', function(event){
    $(this).addClass("clicked");
    if ($(this).hasClass("clicked")){
      userSelection = $(this);
      console.log(userSelection);
        if ($(userSelection).hasClass('false')) {
          $(userSelection).css('borderColor','#56A589');
          $(userSelection).css('color','#56A589');
          $('h2').css('color','#56A589');
          $('h2').css('textAlign', 'center');
          $('h2').text("Correct");
        }
        else {
          $(userSelection).css('borderColor', '#DB6F6F');
          $(userSelection).css('color','#DB6F6F');
          $('h2').css('color', '#DB6F6F');
          $('h2').css('textAlign', 'center');
          $('h2').text("Wrong, Try Again");
        }
    }
  });
});
