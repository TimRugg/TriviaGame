//Start the game automatically
window.onload = function() {
  $("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

//global game variables
var gameQuestionsToAsk = [];

$(".gameAnswerButton").on("click", function() {
	alert($(this).val());
//stop timer

//check answers

//start second timer to display next question
});

$("#gamePlay").on("click", function() {
	alert($(this).val());
	$('#gameMessage').text("Click to answer the following question before the timer runs out...");
	$('#gameIncorrect').text("Incorrect: 2");
	$('#gameTimeRemaining').text(":00");
	$('#gameCorrect').text("Correct: 3");
	$('.gameAnswerButton').show();
	// multiple and true/false
	$('#gameQuestionDisplay').text("This is a question?");
	$('#gameButton1').text("True button text True button text True button text True button text True button text True button text True button text");
	$('#gameButton2').text("False button text False button text False button text False button text False button text False button text");
	// multiple
	$('#gameButton3').show();
	$('#gameButton3').text("button three text button three text button three text button three text button three text");
	$('#gameButton4').show();
	$('#gameButton4').text("button four text button four text button four text button four text button four text button four text");
// true/false
// $('#gameButton3').hide();
// $('#gameButton4').hide();
});



//a start button is displayed - on reset the button becomes replay


//Start game play
//read and display first game question
//game question to ask is array [0]=answer, [1]=question, [2].[0-4]=choices
//  the array for true/false with a false answer will be: false, question, true, false, null, null, null
//timer begins after question is displayed

//if user chooses then timer is stopped
//correct++
//if timer expires than  
//unanswered++ incorrect++  
//
//no more questions
//
//if correct > incorrect then WIN else LOSE
//
//display WIN
//$('#gameMessage').html("You Won!!!");

//display LOSE
//$('#gameMessage').html("You lost!");
//
//display replay button
//$("#gameReset").show();


//code snippets to use?
//    $("#gameReplay").on("click", ReplayGame);
//    $("#gamePlay").on("click", playGame);

// code function to check if user selects an answer choice 
// the answers will have a value to be used as index in the answer check
//   $(".answerChoice").on("click", function() {
//		   	whatchoice = $(this).val();
	//code to check if the choice is right or wrong
	// replace the text of an already displayed html line
//   $("#second-number").text(secondNumber);
//   }

// ************* Taking too long - removed randomize and rebuild **************
//Function to build and return a random array of five questions for game play
//This is called when game play starts and resets
//create an array of unique random numbers
// function randomQuestionsToAsk(gameQuestionsAvailable) {
// 	var tempNumber = 0;
// 	var tempArray = [];
// 	for (var i = 0; i < 5; i++) {
// 		do {tempNumber = Math.floor((Math.random() * gameQuestionsAvailable.length) + 1);
// 		} while(tempArray.includes(tempNumber))
// 		tempArray.push(tempNumber); //add unique number to array
// 	};
// 	//OLD build array for play
// 	// for (i = 0; i < 5; i++) {
// 	// 	gameQuestionsToAsk.push(gameQuestionsAvailable[tempArray[i]])
// 	// };

// 	//build array for play
// 	gameQuestionsToAsk[i].correct_answer = gameQuestionsAvailable[tempArray[i]].correct_answer;
// 	gameQuestionsToAsk[i].question = gameQuestionsAvailable[tempArray[i]].question;
// 	if (gameQuestionsAvailable[i].type="boolean") {
// 		gameQuestionsToAsk[i].all_answers[] = "true","false";
// 	}
// 	else if (gameQuestionsAvailable[i].type="multiple") {
// 		gameQuestionsToAsk[i].all_answers[] = gameQuestionsAvailable[tempArray[i]].incorrect_answers;
// 	};
// 	//insert the correct answer into a random position
// 	var tempNumber = Math.floor((Math.random() * 4));
// 	gameQuestionsToAsk[i].all_answers.splice(tempNumber,0,gameQuestionsAvailable[tempArray[i]].correct_answer);
// }
