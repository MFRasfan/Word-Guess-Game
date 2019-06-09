var movies = ["endegame", "infinitywar", "ageofultron", "theavengers"] 


var randomWord = "";
var letters = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


var wins = 0;

var guessesRemaining = 12;

function Game() {
    
    randomWord = movies[Math.floor(Math.random() * movies.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

function reset() {
    guessesRemaining = 12;
    wrongGuess = [];
    blanksAndCorrect = [];
   
   
Game()
}
function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
    if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        
     for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
         blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("total wins:" + wins + "| guesses remaining:" + guessesRemaining)
  
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
     wins++;
    image()
    reset()
       
     document.getElementById("totalwins").innerHTML = " " + wins;

    } 
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetters(guesses);
    
    complete();
    
    console.log(guesses);

   
    document.getElementById("alreadygussed").innerHTML = "  " + wrongGuess.join(" ");
}

function image() {
   
    if (randomWord === movies[0]) {
        
        document.getElementById("image1").src = "assets/images/EndGame.jpg";
    }
    
    else if (randomWord === movies[1]) {
        
        document.getElementById("image2").src = "assets/images/InfinityWar.jpg";
    }
   
    else if (randomWord === movies[2]) {
        
        document.getElementById("image3").src = "assets/images/AgeofUltron.jpg";
    }
    
    else if (randomWord === movies[3]) {
        
        document.getElementById("image4").src = "assets/images/TheAvengers.jpg";
    }
    
};