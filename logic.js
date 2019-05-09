//variables

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

//pick random word function 
var randomWord = function(gameWords) {
    var guessWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    return guessWord;
}; 

// guess if the letter is correct 
function isCorrectGuess(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
        return true;     
        }
    }
    return false;
}

// blank 
var getBlanks = function(word) {
    var blankArr = [];
    for (var i = 0; i < word.length; i++) {
        blankArr[i] = "_";
    }
    return blankArr; 
}

// var fillBlank
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





        
        


 
  
    

