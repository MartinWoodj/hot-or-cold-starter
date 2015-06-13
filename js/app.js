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
	$("form").submit(function(e){	
	  e.preventDefault();
	  userGuess = $('#userGuess').val();
	  $('#userGuess').val('');
	  $("#guessList").append("<li>" + userGuess + "</li>");
	  console.log("User Guess is " + userGuess);
	  getDifference(randomNumber);
	});	
});

	/*--- Difference Between User Guess and Random Number ---*/
function getDifference(randomNumber){
	var difference = userGuess - randomNumber;
	/*--- Convert difference to positive number ---*/
	difference = Math.abs(difference);
	console.log("Difference between guess is " + difference);
	console.log(typeof difference);
	tempFeedback(difference);
}

function tempFeedback(difference){
	if(difference >= 1 && difference <= 10){
		console.log("Really hot!");
		$("#feedback").text("Really hot!");
	}
	else if(difference >= 11 && difference <= 25){
		console.log("Getting hotter!");
		$("#feedback").text("Getting hotter!");
	}
	else if(difference >= 26 && difference <= 50){
		console.log("Is it chilly in here?");
		$("#feedback").text("Is it chilly in here?");
	}
	else if(difference >= 51 && difference <= 100){
		console.log("Freezing cold!")
		$("#feedback").text("Freezing cold!");
	}
};



