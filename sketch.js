// I used an rgb color picker in this. Just the one that shows up when you search "rgb color picker" in google.

var man;
var bad = [];
var bonus = [];
var currentScene = 1;
var endSceneCountdown = 0;

function setup() {
  createCanvas(640, 360);
  man = new Person();
  scene = new Scenes();
  for (let i = 0; i < 100; i++) {
    bad[i] = new Obstacle();
  }
  for (let j = 0; j < 25; j++) {
    bonus[j] = new Special();
  }
}

// changed the height of the jump
function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -6);
    man.applyForce(jump);
  } 
}

function draw() {
  if (currentScene === 1) {
    scene.draw1();
  }
  if (currentScene === 2) {
    scene.draw2();
  }
}

function mousePressed() {
  if (currentScene === 1) {
    scene.draw2();
  } else if (currentScene === 3) {
    scene.draw1();
  }
}
