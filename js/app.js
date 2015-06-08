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
	  	  	
	  	/*--- Compare random guess with random number ---*/
		$("#guessButton").click(function(e){	
		  userGuess = $('#userGuess').val();
		  $('#userGuess').val('');
		  console.log("User Guess is " + userGuess);
		});
});

/*--- Compare User Guess with Random Number 

var compareNumber = function(){
	if(userGuess){
		
	}
}---*/

/*--- Difference Between User Guess and Random Number ---*/

/*
function numberDifference(){
	var difference = userGuess - randomNumber;
	console.log("Difference between guess is " + difference); 
}
*/

$("#guessButton").click(function(e){
	var difference = userGuess - randomNumber;
	console.log("Difference between guess is " + difference);
});