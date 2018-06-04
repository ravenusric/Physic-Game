var computerMind = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function (event) {

    var psychicTest = event.key;

    var computerThought = computerMind[Math.floor(Math.random() * computerMind.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    if (options.indexOf(psychicTest) > -1) {

        if (psychicTest === computerThought) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (psychicTest != computerThought) {
            numGuesses--;
            guessChoices.push(psychicTest);
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses++;
            guessChoices = [];


        }

        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};
