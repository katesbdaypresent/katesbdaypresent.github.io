var fireworks = [];
var gravity;
var wind;

var sound;

function preload(){
	sound = loadSound("singlefireworkexplosion.mp3");
}

function setup() {
    colorMode(RGB);
    createCanvas(window.innerWidth, window.innerHeight);
    stroke(255);
    strokeWeight(4);
    wind = createVector(0,0); // wind blowing in from the left...
    gravity = createVector(0, 0.2);
	background(0);
}

function draw() {
    background(0, 50);
    if (random(1) < 0.05) {
        fireworks.push(new Firework());
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].isSpent()) {
            fireworks.splice(i, 1);
        }
	}
	stroke(255,255,255);
	fill(255,255,255);
	textSize(50);
	textAlign(CENTER);
	textStyle(BOLD);
	text("Happy Birthday Katie!!!", window.innerWidth / 2, window.innerHeight / 2);
}
