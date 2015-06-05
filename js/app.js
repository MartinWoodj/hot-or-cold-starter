$(document).ready(function(){
	
	  /*--- Generate random number when page loads ---*/
	  var randomNumber = Math.floor(Math.random()* 101);
	    console.log("Page Generated " + randomNumber);  
	  
	  /*--- Display information modal box ---*/
	  	$(".what").click(function(){
	    	$(".overlay").fadeIn(1000);
	  	});
	
	  	/*--- Hide information modal box ---*/
	  	$("a.close").click(function(){
	  		$(".overlay").fadeOut(1000);
	  	});
	  	
	  	/*--- Generate random number when +New Game is clicked ---*/
	  	$(".new").click(function(){
		  	randomNumber = Math.floor(Math.random()* 101);
		  	console.log("Clicked New Game " + randomNumber);
		  	console.log(typeof randomNumber);
	  	});
	  
	  /*--- Prevent submit button from generating a new number 
		$( "#guessButton" ).submit(function(e) {
		  console.log( "Handler for .submit() called." );
		  e.preventDefault();
		});---*/
	  	
	  	/*--- Compare random guess with random number ---*/
		$("#guessButton").submit(function(e){	
		  userGuess = $('#userGuess').val();
		  console.log("User Guess " + userGuess);
		});





});


