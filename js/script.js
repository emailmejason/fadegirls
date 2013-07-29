$(document).ready(function(){

  $('#pix1').click(function() {

    $('.girl').fadeOut('slow', function() {
    });

    $('#girl1').fadeIn('slow');
    });


  $('#pix2').click(function() {

    $('.girl').fadeOut('slow', function() {
     });

    $('#girl2').fadeIn('slow');
    });


  $('#pix3').click(function() {


    $('.girl').fadeOut('slow', function() {
    });

    $('#girl3').fadeIn('slow');
    });
var fadegirl1 =function() {

    $('.girl').fadeOut('slow', function() {
    });

    $('#girl1').fadeIn('slow');
  };
var fadegirl2=function() {

    $('.girl').fadeOut('slow', function() {
    });

    $('#girl2').fadeIn('slow');
  };

var fadegirl3=function() {

    $('.girl').fadeOut('slow', function() {
    });

    $('#girl3').fadeIn('slow');
 };

    var fadethegirls=function() {
      setTimeout(fadegirl1,1000);
      setTimeout(fadegirl2,2000);
      setTimeout(fadegirl3,3000);
    };


    fadethegirls();
    setInterval(fadethegirls,3000);


});
