//define functions here

function getIt () {
  $('p').on('click', function () {
    alert ("Hey!")
  })}
  
  function frameIt() {   
   $(window).on('load', function () {
    $('img').addClass("tasty")
    $('img').css({ "display": "inline-block" })
    $('img').css({ "border-color": "red", "border-style": "solid", "border-weight": "5px"}); 
    })}
    
    function pressIt (key) {    
    $(document).on('keydown', function (key) {
      
      if (key.which == 71) {
        alert ('G was pressed!')
      }
    })}

$(document).ready(function() {

getIt()

frameIt()

pressIt()


    
    $('form').on('submit', function submitIt () {
      alert ('Your form is going to be submitted now.')
    });
    
});
