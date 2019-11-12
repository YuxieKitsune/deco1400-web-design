$(document).ready(function(){
   $(".other").hover(function() {
     //find() finds all descendants in a tree (jquery.org, 2017)
     //after finding the subNav which was coded as a descendent of the 'other' tab,
     //it slides down the list using animation to make it look smooth at a speed of 100
     $(this).parent().find(".subNav").slideDown(100).show();
     //hovering over any elements excluding the parent element of the subNav activates this
     $(this).parent().hover(function() {
     }, function(){
       //finds the subNav and slides it back up to hide it at a speed of 200
       $(this).parent().find(".subNav").slideUp(200);
     });
     //the difference in speed was created to quickly show the drop down list when hovered over,
     //while adding a much smoother effect when sliding back up.
   });
});
