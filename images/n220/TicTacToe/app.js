//Lauren Fasig
//N220
//2.25.2019

var player1 = 'X';
var player2 = 'Y';
var player = 'X';

var score1 = 0;
var score2 = 0;


document.getElementById("box").onclick = game;
document.getElementById("box2").onclick = game;
document.getElementById("box3").onclick = game;
document.getElementById("box4").onclick = game;
document.getElementById("box5").onclick = game;
document.getElementById("box6").onclick = game;
document.getElementById("box7").onclick = game;
document.getElementById("box8").onclick = game;
document.getElementById("box9").onclick = game;

//document.getElementById("win").innerHTML = "Player 1's Turn";

function game() {
    var moveBox = this.id;
    
    if(player == 'X') {
        document.getElementById(moveBox).innerHTML = "X";
        document.getElementById(moveBox).disabled = true;
    }
    if(player == 'Y') {
        document.getElementById(moveBox).innerHTML = "O";
        document.getElementById(moveBox).disabled = true;
    }
    switchTurn();
    

    function switchTurn() {
        if (player == 'X') {
            document.getElementById("turn").innerHTML = "Player 2's Turn";
            player = 'Y';
        }
        else if (player == 'Y') {
            document.getElementById("turn").innerHTML = "Player 1's Turn";
            player = 'X';
        }
    }

    winner();

    function winner() {
        if (box.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X'){
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box4.innerHTML == 'X' && box5.innerHTML == 'X' && box6.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box7.innerHTML == 'X' && box8.innerHTML == 'X' && box9.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box3.innerHTML == 'X' && box6.innerHTML == 'X' && box9.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box.innerHTML == 'X' && box5.innerHTML == 'X' && box9.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }
        else if (box3.innerHTML == 'X' && box5.innerHTML == 'X' && box7.innerHTML == 'X') {
            document.getElementById("win").innerHTML = "Player 1 Wins";
        }

        if (box.innerHTML == 'O' && box2.innerHTML == 'O' && box3.innerHTML == 'O'){
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box4.innerHTML == 'O' && box5.innerHTML == 'O' && box6.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box7.innerHTML == 'O' && box8.innerHTML == 'O' && box9.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box3.innerHTML == 'O' && box6.innerHTML == 'O' && box9.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box.innerHTML == 'O' && box5.innerHTML == 'O' && box9.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }
        else if (box3.innerHTML == 'O' && box5.innerHTML == 'O' && box7.innerHTML == 'O') {
            document.getElementById("win").innerHTML = "Player 2 Wins";
        }

        
        else if (box.disabled == true && box2.disabled == true && box3.disabled == true && box4.disabled == true && box5.disabled == true && box6.disabled == true && box7.disabled == true && box8.disabled == true && box9.disabled == true){
            document.getElementById("win").innerHTML = "Cat's Game";
        }
    }

    
}