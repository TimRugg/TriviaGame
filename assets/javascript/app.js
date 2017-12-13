//global game variables
var timerDisplay = 6; //countdown will start at 5
var counterCorrect = 0; //questions answered correctly
var counterIncorrect = 0; //questions answered incorrectly

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
		gameIncorrectAnswer(true); //did question timeout? true
	}
}

function gameStart () {
	//display next question
	$('#gameMessage').html("");
	displayNextQuestion();
	timerDisplay = 6;
	gameTimerStart();
}

function displayNextQuestion () {
	$('#gameQuestionDisplay').text("This is a question?");
	$('#gameButton1').show();
	$('#gameButton1').text("True button text True button text True button text True button text True button text True button text True button text");
	$('#gameButton2').show();
	$('#gameButton2').text("False button text False button text False button text False button text False button text False button text");
	// multiple
	$('#gameButton3').show();
	$('#gameButton3').text("button three text button three text button three text button three text button three text");
	$('#gameButton4').show();
	$('#gameButton4').text("button four text button four text button four text button four text button four text button four text");
}


$(".gameAnswerButton").on("click", function() {

alert($(this).val());
		//stop timer
		gameTimerStop();
		//check answers
		if ($(this).val() == 1) {
			gameCorrectAnswer();
		} else {
			gameIncorrectAnswer(false); //did question timeout? false
		};
});

function gameCorrectAnswer() {
	counterCorrect++;
	$('#gameCorrect').html("Correct: " + counterCorrect);
	$('#gameMessage').html("Great! That is correct.");
	$('.gameAnswerButton').hide();
	//Display the correct answer...
	$('#gameButton0').show();
	$('#gameButton0').text("This is the correct answer displayed.");
	setTimeout(gameStart,1000*3); //show correct answer for several seconds
} 

function gameIncorrectAnswer(timeOut) {
	counterIncorrect++;
	$('#gameIncorrect').html("Incorrect: " + counterIncorrect);	
	if (timeOut) {
			$('#gameMessage').html("Time's up! Missed answers count as incorrect...");
		} else {
			$('#gameMessage').html("Too bad. That is incorrect. The correct answer is...");
		}
	$('.gameAnswerButton').hide();
	//Display the correct answer...
	$('#gameButton0').show();
	$('#gameButton0').text("This is the correct answer displayed.");
	setTimeout(gameStart,1000*3);  //show correct answer for several seconds
}


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
