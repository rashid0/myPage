//when li is clicked inside of ul run below code

$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
		});

//click on trash can to delte todo

$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){$(this).remove();})
	//to stop event bubbling we use below jquery method
	event.stopPropagation();

});



$("input[type='text']").keypress(function(event){
	if (event.which===13) {
		//grabbing new to do from input
		var todoText = $(this).val();
		//to clear input after enter
		$(this).val("");
		//create a new li and add to ul 
		$('ul').append("<li><span><i class='fa fa-trash'></i> </span> " + todoText + "</li>")

	};





})
;


$('.fa-plus').click(function(){
		$('input[type="text"]').fadeToggle();


});


$('span').click(function() {
		$('body').toggleClass({
			


		})
});
	