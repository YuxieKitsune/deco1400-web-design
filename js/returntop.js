$(document).ready(function(){
   $(".returntop").click(function () {
     //after clicking on class with .returntop, javascript triggers scrollTop
     //{scrollTop: position wanted for height}, speed in ms (jQuery?, 2017)
     $("html, body").animate({scrollTop: 0}, 1000);
   });
});
//binds the action of scrolling to a function
$(window).scroll(function() {
  //scrollTop returns a 0 (a false) if the window is at the top, otherwise returns a number (true) (jquery.org, 2017)
  //if scrollTop returns a number and therefore is true, then fadeIn the returntop object
  if ($(this).scrollTop()) {
    $('.returntop').fadeIn();
  }
  //otherwise if scrollTop is 0, then fadeOut the returntop object
  else {
    $('.returntop').fadeOut();
  }
});
