//global game variables
var gameQuestionsToAsk = [];
//Create array of available questions
var gameQuestionsAvailable = [
{
"category": "Entertainment: Musicals & Theatres",
"type": "multiple",
"difficulty": "medium",
"question": "When was the play &#039;Macbeth&#039; written?",
"correct_answer": "1606",
"incorrect_answers": [
"1605",
"1723",
"1628"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "medium",
"question": "When was the original Star Wars: Battlefront II released?",
"correct_answer": "October 31, 2005",
"incorrect_answers": [
"December 18, 2004",
"November 21, 2006",
"September 9, 2007"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "medium",
"question": "What French artist/band is known for playing on the midi instrument &quot;Launchpad&quot;?",
"correct_answer": "Madeon",
"incorrect_answers": [
"Daft Punk ",
"Disclosure",
"David Guetta"
]
},
{
"category": "Sports",
"type": "multiple",
"difficulty": "medium",
"question": "At which bridge does the annual Oxford and Cambridge boat race start?",
"correct_answer": "Putney",
"incorrect_answers": [
"Hammersmith",
"Vauxhall ",
"Battersea"
]
},
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "medium",
"question": "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
"correct_answer": "Chicago",
"incorrect_answers": [
"Dreamgirls",
"Cabaret",
"All That Jazz"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The humerus, paired radius, and ulna come together to form what joint?",
"correct_answer": "Elbow",
"incorrect_answers": [
"Knee",
"Sholder",
"Ankle"
]
},
{
"category": "Science: Mathematics",
"type": "multiple",
"difficulty": "medium",
"question": "What are the first 6 digits of the number &quot;Pi&quot;?",
"correct_answer": "3.14159",
"incorrect_answers": [
"3.14169",
"3.12423",
"3.25812"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "medium",
"question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
"correct_answer": "The Front Bottoms",
"incorrect_answers": [
"Twenty One Pilots",
"The Wonder Years",
"The Smith Street Band"
]
},
{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "medium",
"question": "In which country&#039;s version of Half-Life are the HECU Marines replaced with robots?",
"correct_answer": "Germany",
"incorrect_answers": [
"Japan",
"China",
"France"
]
},
{
"category": "History",
"type": "boolean",
"difficulty": "medium",
"question": "In World War II, Hawker Typhoons served in the Pacific theater.",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
"category": "General Knowledge",
"type": "multiple",
"difficulty": "medium",
"question": "What does the &quot;G&quot; mean in &quot;G-Man&quot;?",
"correct_answer": "Government",
"incorrect_answers": [
"Going",
"Ghost",
"Geronimo"
]
}];

//CSS styling for display - following IDs on divs in HTML
// #gameDisplay
$('#gameDisplay').append("<div id='gameTitle' class='text-center'><h1>Play Trivia!</h1></div>");
$('#gameTitle').css({"color": "blue", "background-color": "lightblue", "border": "solid 9px blue", "padding": "18px"});
$('#gameDisplay').append("<div id='gameMessage' class='text-center'>Click to begin: <button id='gamePlay' value='play'>Play Trivia</button></div>");
$('#gameMessage').css({"color": "blue", "font-size": "28px", "height": "56px", "padding": "18px"});
$('#gameDisplay').append("<div id='gameQuestionDisplay' class='text-center'></div>");
$('#gameQuestionDisplay').css({"color": "black", "font-size": "28px", "font-weight": "bold", "padding": "18px"});

$('#gameDisplay').append("<div class='row'><div id='gameIncorrect' class='col-md-4 text-right'></div><div id='gameTimeRemaining' class='col-md-4 text-center'></div><div id='gameCorrect' class='col-md-4 text-left'></div>");
// $('#gameDisplay').append("<div id='gameTimeRemaining' class='text-center'></div>");
$('#gameIncorrect').css({"color": "black", "font-size": "18px", "height": "36px"});
$('#gameTimeRemaining').css({"color": "red", "font-size": "24px", "height": "36px"});
$('#gameCorrect').css({"color": "black", "font-size": "18px", "height": "36px"});

$('#gameDisplay').append("<div id='gameChoicesDisplay' class='text-center'></div>");
$('#gameChoicesDisplay').css({"color": "blue", "font-size": "24px", "width": "66%", "margin":"auto"});

// #gameQuestionDisplay and .gameAnswerButton
// $('#gameChoicesDisplay').append("<ul class='list-group'>");
// $('#gameChoicesDisplay').append("<li> id='gameButton1' class='list-group-item gameAnswerButton' value='1'></li>");
// $('#gameChoicesDisplay').append("<li> id='gameButton2' class='list-group-item gameAnswerButton' value='2'></li>");
// $('#gameChoicesDisplay').append("<li> id='gameButton3' class='list-group-item gameAnswerButton' value='3'></li>");
// $('#gameChoicesDisplay').append("<li> id='gameButton4' class='list-group-item gameAnswerButton' value='4'></li>");
// $('#gameChoicesDisplay').append("</ul>");

$('#gameChoicesDisplay').append("<button id='gameButton1' class='gameAnswerButton' value='1'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton2' class='gameAnswerButton' value='2'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton3' class='gameAnswerButton' value='3'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton4' class='gameAnswerButton' value='4'></button>");
$('.gameAnswerButton').css({"padding": "12px", "margin": "6px", "width": "100%"});
$('.gameAnswerButton').hide();

$(".gameAnswerButton").on("click", function() {
	alert($(this).text());
//stop timer

//check answers

//start second timer to display next question
});

$("#gamePlay").on("click", function() {
	alert($(this).text());
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
