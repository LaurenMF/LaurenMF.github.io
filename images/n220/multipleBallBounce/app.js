//Lauren Fasig
//N220
//4.1.2019

let xPositions = [30,400,30];
let yPositions = [60,60,300];
//let xPos = 30;
//let yPos = 60;
let xVel = [5,5,5];
let yVel = [5,5,5];

function setup() {
    createCanvas(800, 600);
    strokeWeight(7);
    
}

function draw() {
    background(000);

    for (let i=0; i < 3; i++) {
    xPositions[i]+=xVel[i];
    yPositions[i]+=yVel[i];
    fill("#009900")
    circle(xPositions[i], yPositions[i], 35);

    if(xPositions[i] > 770 || xPositions[i] < 30) {
        xVel[i] *= (-1);
    }

    if(yPositions[i] > 570 || yPositions[i] < 30) {
        yVel[i] *= (-1);
    }
}
}