// stats
var tie = 0;
var win = 0;
var lost = 0;

// list of choices
var options = ["R", "P", "S"];

// function declaration
var playGame = function () {
    // user's choice
    var userChoice = window.prompt("enter either R, P, or S: ")
    
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);

    // generating random index
    var index = Math.floor(Math.random() * options.length);

    // computer choices
    var computerChoice = options[index];

    // alert
    window.alert("computer: " + computerChoice);

    // choices comparisond
    if (userChoice === computerChoice) {
        tie++
        window.alert("its a tie");
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        win++
        window.alert("user win")
    } else if (
        (computerChoice === "R" && userChoice === "S") ||
        (computerChoice === "P" && userChoice === "R") ||
        (computerChoice === "S" && userChoice === "P")
    ){
        lost++
        window.alert("user lost")
    } else {
        window.alert("invalid option");
        return
    }

    window.alert("starts: \nwins: " + win + "\nlost: " + lost + "\ntie: " + tie)

    var playAgain = window.confirm("play again?")
    if (playAgain) {
        playGame();
    }
}

playGame();

