//Lauren Fasig
//N220
//2.18.2019

let r = 0;
let g = 0;
let b = 0;

document.getElementById("r1").onclick = Mixer;
document.getElementById("r5").onclick = Mixer;
document.getElementById("r10").onclick = Mixer;

document.getElementById("g1").onclick = Mixer;
document.getElementById("g5").onclick = Mixer;
document.getElementById("g10").onclick = Mixer;

document.getElementById("b1").onclick = Mixer;
document.getElementById("b5").onclick = Mixer;
document.getElementById("b10").onclick = Mixer;

function Mixer() {
    var colorMix = this.id;


    if (colorMix == "r1") {
        r++;
    }
    else if (colorMix == "r5") {
        r += 5;
    }
    else if (colorMix == "r10") {
        r +=10;
    }

    if (colorMix == "g1") {
        g++;
    }
    else if (colorMix == "g5") {
        g += 5;
    }
    else if (colorMix == "g10") {
        g +=10;
    }

    if (colorMix == "b1") {
        b++;
    }
    else if (colorMix == "b5") {
        b += 5;
    }
    else if (colorMix == "b10") {
        b +=10;
    }

    document.getElementById("color").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    document.getElementById("value").innerHTML = "Current Color: rgb(" + r + ", " + g + ", " + b + ")";
}
