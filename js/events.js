//define functions here

$(document).ready(function()

  $('p').on('click', function getIt () {
    alert ("Hey!")
  })
   
   $(window).on('load', function frameIt() {
    $('img').addClass("tasty")
    $('img').css({ "display": "inline-block" })
    $('img').css({ "border-color": "red", "border-style": "solid", "border-weight": "5px"}); 
    }); 
    
    $(document).on('keydown', function pressIt (key) {
      
      if (key.which == 71) {
        alert ('G was pressed!')
      }
    });
    
    $('form').on('submit', function submitIt () {
      alert ('Your form is going to be submitted now.')
    });
    
{});
