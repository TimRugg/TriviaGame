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

// #gameDisplay create the divs and then apply the css to them. The game execution updates the content.
$('#gameDisplay').append("<div id='gameTitle' class='text-center'><h1>Play Trivia!</h1></div>");
$('#gameDisplay').append("<div id='gameMessage' class='text-center'>Click to begin: <button id='gamePlay' value='play'>Play Trivia</button></div>");
$('#gameDisplay').append("<div id='gameQuestionDisplay' class='text-center'></div>");
$('#gameDisplay').append("<div class='row'><div id='gameIncorrect' class='col-md-4 text-right'></div><div id='gameTimeRemaining' class='col-md-4 text-center'></div><div id='gameCorrect' class='col-md-4 text-left'></div>");
$('#gameDisplay').append("<div id='gameChoicesDisplay' class='text-center'></div>");
$('#gameChoicesDisplay').append("<button id='gameButton1' class='gameAnswerButton' value='1'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton2' class='gameAnswerButton' value='2'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton3' class='gameAnswerButton' value='3'></button>");
$('#gameChoicesDisplay').append("<button id='gameButton4' class='gameAnswerButton' value='4'></button>");
$('.gameAnswerButton').hide();
// apply CSS
$('#gameTitle').css({"color": "blue", "background-color": "lightblue", "border": "solid 9px blue", "padding": "18px"});
$('#gameMessage').css({"color": "blue", "font-size": "28px", "height": "56px", "padding": "18px"});
$('#gameQuestionDisplay').css({"color": "black", "font-size": "28px", "font-weight": "bold", "padding": "18px"});
$('#gameIncorrect').css({"color": "black", "font-size": "18px", "height": "36px"});
$('#gameTimeRemaining').css({"color": "red", "font-size": "24px", "height": "36px"});
$('#gameCorrect').css({"color": "black", "font-size": "18px", "height": "36px"});
$('#gameChoicesDisplay').css({"color": "blue", "font-size": "24px", "width": "66%", "margin":"auto"});
$('.gameAnswerButton').css({"padding": "12px", "margin": "6px", "width": "100%"});
