//global game variables
var timerDisplay = 4; //countdown will start at 5
var counterCorrect = 0; //questions answered correctly
var counterIncorrect = 0; //questions answered incorrectly
var counterQuestion = 0;
var gameQuestionToDisplay = "";
var gameCorrectAnswer = "";
var gameQuestionType = "";
var gameAnswers = [];
var booleanLastQuestion = false; //used to test completion of questions

window.onload = function() {
	setTimeout(gameStartMessage1,1000*2);
	setTimeout(gameStartMessage2,1000*3);
	setTimeout(gameStartMessage3,1000*4);
	setTimeout(gameStart,1000*5);
}

function gameStartMessage1() {
	$('#gameMessage').html("Ready...");
}

function gameStartMessage2() {
	$('#gameMessage').html("Set...");
}

function gameStartMessage3() {
	$('#gameMessage').html("Go!!!");
}

function gameTimerStop() {
	clearInterval(intervalId);
	$('#gameTimeRemaining').html("");
}

function gameTimerStart() {
	//update time remaining every second
	intervalId = setInterval(gameCountdown, 1000);
}

function gameCountdown() {
	//every second countdown the timer
	timerDisplay --;
	$('#gameTimeRemaining').html(timerDisplay);
	//if timer runs out, send to incorrect function
	if (timerDisplay === 0) {
		gameTimerStop();
		gameAnswerIncorrect(false); //answer not incorrect - just timed out
	}
}

function gameStart () {
	//clear game message and hide correct answer
	$('#gameMessage').html("");
	$('#gameButton0').hide(); //correct answer

	//Get data from the next question in array 
	gameQuestionToDisplay = gameQuestionsAvailable[counterQuestion].question;
	gameCorrectAnswer = gameQuestionsAvailable[counterQuestion].correct_answer;
	gameQuestionType = gameQuestionsAvailable[counterQuestion].type;
	gameAnswers = gameQuestionsAvailable[counterQuestion].incorrect_answers;

	//randomly insert correct answer into list of choices
	if (gameQuestionType == "multiple") {
		gameCorrectAnswerIndex = Math.floor((Math.random() * 4));
	} else {
		//else true and false
		gameCorrectAnswerIndex = Math.floor((Math.random() * 2));
		};
	//insert into indexed position
	gameAnswers.splice(gameCorrectAnswerIndex, 0, gameCorrectAnswer);

console.log(gameCorrectAnswerIndex + " " + gameAnswers);

	//prepare for next question - this funcion not used if at end of array
	counterQuestion++;
	booleanLastQuestion = counterQuestion == gameQuestionsAvailable.length;
	//display the question selected
	displayNextQuestion();
	timerDisplay = 4;
	gameTimerStart();
}

function displayNextQuestion () {
	$('#gameQuestionDisplay').html(gameQuestionToDisplay);
	$('#gameButton1').show();
	$('#gameButton1').text(gameAnswers[0]);
	$('#gameButton2').show();
	$('#gameButton2').text(gameAnswers[1]);
	if (gameQuestionType == "multiple") {
		$('#gameButton3').show();
		$('#gameButton3').text(gameAnswers[2]);
		$('#gameButton4').show();
		$('#gameButton4').text(gameAnswers[3]);
	//else true and false	
	} else {
		$('#gameButton3').hide();
		$('#gameButton4').hide();
	}
}

$(".gameAnswerButton").on("click", function() {
		//stop timer
		gameTimerStop();
		//check answers - the answer index is 1 less than the button values
		if ($(this).val() == gameCorrectAnswerIndex + 1) {
			gameAnswerCorrect();
		} else {
			gameAnswerIncorrect(true); //answer was incorrect
		};
});

function gameAnswerCorrect() {
	counterCorrect++;
	$('#gameCorrect').html("Correct: " + counterCorrect);
	$('#gameMessage').html("Great! That is correct.");
	$('.gameAnswerButton').hide();
	//Display the correct answer...
	$('#gameButton0').show();
	$('#gameButton0').text(gameCorrectAnswer);
	// gameCompleteCheck()
	setTimeout(gameCompleteCheck,1000*3);  //show correct answer for several seconds				
} 

function gameAnswerIncorrect(gameAnsweredIncorrect) {
	counterIncorrect++;
	$('#gameIncorrect').html("Incorrect: " + counterIncorrect);	
	if (gameAnsweredIncorrect) {
			$('#gameMessage').html("Too bad. That is incorrect. The correct answer is...");
		} else {
			$('#gameMessage').html("Time's up! Missed answers count as incorrect...");
		};
	$('.gameAnswerButton').hide();
	//Display the correct answer...
	$('#gameButton0').show();
	$('#gameButton0').text(gameCorrectAnswer);
	// gameCompleteCheck()
	setTimeout(gameCompleteCheck,1000*3);  //show correct answer for several seconds				

}

function gameCompleteCheck() {

	//was this the last question
	if (booleanLastQuestion) {
		//finish game
		$('#gameButton0').hide();
		$('#gameQuestionDisplay').html("");
		if (counterIncorrect > counterCorrect) {
			$('#gameMessage').html("Sorry but you lost.");	
		} else {
			$('#gameMessage').html("You won!!!");
		}
	} else {
		gameStart();  //go to another question				
	};
}


//display replay button
//$("#gameReset").show();


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
