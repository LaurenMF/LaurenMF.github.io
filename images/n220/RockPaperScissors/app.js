//Lauren Fasig
//N220
//2.25.2019
var playerS = 0;
var compS = 0;

document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;


function user() {
    var userMove = this.id;
    document.getElementById("move").innerHTML = "Player: " + userMove;

    var computer = Math.random();
        if (computer < 0.33) {
            computer = "rock";
        }
        else if (computer <= 0.66) {
            computer = "paper";
        }
        else {
            computer = "scissors";
        }
    document.getElementById("move2").innerHTML = "Computer: " + computer;

    if (userMove == computer) {
        document.getElementById("result").innerHTML = "It's a Tie.";
    }
    else if (userMove == "rock") {
        if (computer == "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
            playerS++;
        }
        else if (computer == "paper") {
            document.getElementById("result").innerHTML = "Computer Wins.";
            compS++;
        }
    }
    else if (userMove == "paper") {
        if (computer == "rock") {
            document.getElementById("result").innerHTML = "You Win!";
            playerS++;
        }
        else if (computer == "scissors") {
            document.getElementById("result").innerHTML = "Computer Wins.";
            compS++;
        }
    }
    else if (userMove == "scissors") {
        if (computer == "paper") {
            document.getElementById("result").innerHTML = "You Win!";
            playerS++;
        }
        else if (computer == "rock") {
            document.getElementById("result").innerHTML = "Computer Wins.";
            compS++;
        }
    }

    document.getElementById("pscore").innerHTML = "Player Score: " + playerS;
    document.getElementById("cscore").innerHTML = "Computer Score: " + compS;

}

