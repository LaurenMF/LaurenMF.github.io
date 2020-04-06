//Lauren Fasig
//N220
//4.1.2019

let rainX = [];
let rainY = [0];
let speed = 5;
let gravity = 2.8;



function setup() {
    createCanvas(800, 600);
    strokeWeight(3);
}

function draw() {
    background(000);
    let chance = Math.floor(Math.random() * 10);
    if (chance == 3 || chance == 6) {
        rainX.push(Math.random() * 800);
        rainY.push(35);
    }
    for (let i=0; i < rainX.length; i++) {
        let y = rainY[i] - 30;
        line(rainX[i], y, rainX[i], rainY[i]);
        stroke("#33ccff");

        
        rainY[i]+=5;

        if (rainY[i] > 600) {
            rainY.shift();
            rainX.shift();
            ellipse(rainX[i], 595, 30, 10);
        }
    }
}
