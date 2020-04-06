//Lauren Fasig
//N220
//4.11.2019

let trailX1 = [];
let trailY1 = [];
let trailX2 = [];
let trailY2 = [];
let trailX3 = [];
let trailY3 = [];
let trailX4 = [];
let trailY4 = [];

let r, g, b;
let rad, gravity, fall;
let y, x;

function setup() {
    createCanvas(windowWidth, 600);
    noStroke();
    r = random(255);
    g = random(255);
    b = random(255);

  }
  
function draw() {
    background(000);
    let i = 0;
    

    fill(r, g, b);
    circle(mouseX, mouseY, 2);
    //////////////////////////////////////////
    for(let a = 0; a < 360; a = a+360/13){
      trailX2.push(cos(a)*rad + x);
      trailY2.push(sin(a)*rad + y+gravity);
      for(i = 0; i < trailX2.length; i++) {
        ellipse(trailX2[i], trailY2[i], 5);
      }
      if(trailX2.length > 200) {
        trailX2.shift();
        trailY2.shift();
      }
    }
    ///////////////////////////////////////////
    for(let a = 0; a < 360; a = a+360/11){
      
      trailX1.push(cos(a)*rad*3/4 + x);
      trailY1.push(sin(a)*rad*3/4 + y+gravity);
      for(i = 0; i < trailX1.length; i++) {
        ellipse(trailX1[i], trailY1[i], 5);
      }
      if(trailX1.length > 100) {
        trailX1.shift();
        trailY1.shift();
      }
    }
    /////////////////////////////////////////////
    for(let a = 0; a < 360; a = a+360/7){
      trailX3.push(cos(a)*rad/2 + x);
      trailY3.push(sin(a)*rad/2 + y+gravity);
      for(i = 0; i < trailX3.length; i++) {
        ellipse(trailX3[i], trailY3[i], 5);
      }
      if(trailX3.length > 75) {
        trailX3.shift();
        trailY3.shift();
      }
    }
    //////////////////////////////////////////////
    for(let a = 0; a < 360; a = a+360/5){
      trailX4.push(cos(a)*rad/3 + x);
      trailY4.push(sin(a)*rad/3 + y+gravity);
      for(i = 0; i < trailX4.length; i++) {
        ellipse(trailX4[i], trailY4[i], 5);
      }
      if(trailX4.length > 50) {
        trailX4.shift();
        trailY4.shift();
      }
    }
  
    rad+=2;
    fall++;
    gravity += fall/22;

}  

function mouseClicked() {
    x = mouseX;
    y = mouseY;
    r = random(255);
    g = random(255);
    b = random(255);
    rad = 1;
    gravity = 0;
    fall = 0;
    
}