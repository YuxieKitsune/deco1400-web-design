$(document).ready(function(){
	$(".return").click(function(){
		//the parent of .return is the html document itself
		//by clicking this, history.back() causes the page to go back by one
		parent.history.back();
	});
});
