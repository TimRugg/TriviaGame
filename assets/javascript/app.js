//Setup initial display
//CSS styling for display - following IDs on divs in HTML
// #gameDisplay
// #gameTitle
// #gameMessage1
// #gameTimeRemaining
// #gameQuestionDisplay
// #gameMessage2

//global game variables

//a start button is displayed - on reset the button becomes replay
//$("#gameReset").hide();
//$('#gameCurrentGuess').html(totalCurrentGuess);

//Function to create and return array of many questions
//This is called when game play starts
//gameQuestionsAvailable[]

//Function to build and return a random array of five questions for game play
//This is called when game play starts and resets
//create an array of unique random numbers
function randomQuestionsToAsk(gameQuestionsAvailable) {
	var tempNumber = 0;
	var tempArray = [];
	for (var i = 0; i < 5; i++) {
		do {tempNumber = Math.floor((Math.random() * gameQuestionsAvailable.length) + 1);
		} while(tempArray.includes(tempNumber))
		tempArray.push(tempNumber); //add unique number to array
	}
	//count back down and build array for play
	do {gameQuestionsToAsk.push(gameQuestionsAvailable[tempArray[i]]) {
		i--;
	} while (i > 0);


	gem1Value = tempArray[0];
	gem2Value = tempArray[1];
	gem3Value = tempArray[2];
	gem4Value = tempArray[3];
}

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