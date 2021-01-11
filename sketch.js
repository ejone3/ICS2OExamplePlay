var man;
var bad = [];
var bonus = [];
var currentScene = 1;
var endSceneCountdown = 0;

function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100; i++) {
    bad[i] = new Obstacle();
  }
  for (let j = 0; j < 25; j++) {
    bonus[j] = new Special();
  }
}

// scene 1, the start scene
var drawScene1 = function() {
  currentScene = 1;
  man.score = 0;
  
  background(164, 250, 117);
  textSize(50);
  textAlign(CENTER);
  fill(0);
  text("Blocky Jump!!", width/2, 50);
  textSize(30);
  text("Click to start", width/2, 100);
  
  noStroke();
  fill(255);
  rect(width/4, height/2, 50, 50);
  fill(250, 117, 117);
  rect(width/2, height * 3/4, 60, 60);
}

var drawScene2 = function() {
  currentScene = 2;
  background(51);
  
  // changed this number, not sure what it does, will check it out later
  translate(-man.pos.x + 50, 0);
  endSceneCountdown += 1.2;
  
  let gravity = createVector(0, 0.17);
  man.applyForce(gravity);
  
  man.update();
  man.display();
  man.edges();
  
  for (let i = 0; i < 100; i++) {
    if(man.hits(bad[i])) {
      console.log(bad[i].pos.x);
    }
    bad[i].show();
    bad[i].update();
  }
  
  for (let j = 0; j < 25; j++) {
    if (man.hits(bonus[j])) {
      console.log(bonus[j].pos.x);
    }
    bonus[j].show();
    bonus[j].update();
  }
  
  if (endSceneCountdown > 1210) {
    drawScene3();
  }
}

var drawScene3 = function() {
  currentScene = 3;
  endSceneCountdown = 0;
  man.reset(); 
  
  resetMatrix();
  
  bad = [];
  for (let i = 0; i < 100; i++) {
    bad[i] = new Obstacle();
  }
  
  bonus = [];
  for (let j = 0; j < 25; j++) {
    bonus[j] = new Special();
  }
  
  background(219, 160, 208);
  textSize(20);
  textAlign(CENTER);
  noStroke();
  fill(242, 82, 120);
  text("You reached the end of the game! Your score was " + man.score + ". Good job!", width/2, 50);
  text("Just click to restart", width/2, 300);
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
    drawScene1();
  }
  if (currentScene === 2) {
    drawScene2();
  }
}

function mousePressed() {
  if (currentScene === 1) {
    drawScene2();
  } else if (currentScene === 3) {
    drawScene1();
  }
}
