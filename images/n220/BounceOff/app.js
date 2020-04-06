//Lauren Fasig
//N220
//4.8.2019

let xPos = 30;
let yPos = 60;
let xRect = 10;
let yRect = 570;
let xVel = 5;
let yVel = 5;

function setup() {
    createCanvas(800, 600);
    strokeWeight(7);
}

function draw() {
    background(000);
    xPos+=xVel;
    yPos+=yVel;
    xRect = mouseX - 100;
    fill("fff");
    rect(xRect, yRect, 200, 30);
    fill("#009900");
    circle(xPos, yPos, 35);

    
    if(xPos > 770 || xPos < 30) {
        xVel *= (-1);
    }

    if(yPos < 30) {
        yVel *= (-1);
    }

    if(hitTest(xPos, yPos, xRect, yRect) == true) {
        yVel *= (-1);
    }

    else if(yPos > 600){
        xPos = 30; 
        yPos = 60;
    }
}

function hitTest(xPos, yPos, xRect, yRect) {
    if (xPos +35 > xRect && xPos < xRect + 200) {
        if (yPos + 35 > yRect && yPos < yRect + 30) {
            return true;
        }
    }
    return false;
}






