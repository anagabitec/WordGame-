// 1.0 - variables

var gameWords = [
    "basketball",
    "soccer",
    "crossfit",
    "rockclimbing",
    "swim",
    "football",
    "handball",
    "tennis"
];

// 1.1 - pick random word function 
var randomWord = function(gameWords) {
    var guessWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    return guessWord;
}; 

// 1.2 - guess if the letter is correct 
function isCorrectGuess(word, letter) {
    for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        return true;     
        }
    }
    return false;
}

// 1.3 - blank 
var getBlanks = function(word) {
    var blankArr = [];
    for (var i = 0; i < word.length; i++) {
        blankArr[i] = "_";
    }
    return blankArr; 
}

//1.4 - var fillBlank
var fillBlanks = function (word, guessWord, letter){
    if (isCorrectGuess(word, letter)) {
        for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessWord[i] = letter;
            }
        }
    } 
    return guessWord;
}

// 1.5 - function to start the game
function setupRound (word){
    var setup = {
        word : word,
        guessesLeft : 9,
        wrongGuesses :[],
        puzzleState : getBlanks(word),
    }
    return setup; 
}

// 1.6 - function to update the rounds 
function updateRound (object, letter){
    if (isCorrectGuess(object.word, letter) === false){
        object.guessesLeft--;
        object.wrongGuesses.push(letter);
     }
     else {
        fillBlanks(object.word, object.puzzleState, letter)
     }
     return object;
}

// 1.7 function for winning 
function hasWon (puzzleState){
    for (var i = 0; i < puzzleState.length; i++) {
    if (puzzleState[i] === "_") {
        return false;
        } 
    }
        return true; 
}

// 1.8 function for loosing 
function hasLost (guessesLeft){
    if (guessesLeft === 0 ) {
        return true;
    } 
        return false; 
}

// 1.9 check if round is over (really struggled on this one)
function isEndOfRound (object){
    if (object.guessesLeft === 0){
        return true;
    }
    // i was returning false here 
    if (hasWon(object.puzzleState)){
       return true; 
    }
    return false;

}

        
        


 
  
    

