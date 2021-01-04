var man;
var bad;

function setup() {
  createCanvas(640, 360);
  man = new Person();
  bad = new Obstacle();
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -6);
    man.applyForce(jump);
  } 
}

function draw() {
  background(51);
  
  let gravity = createVector(0, 0.1);
  man.applyForce(gravity);
  
  translate(-man.pos.x + 50,0);
  
  man.update();
  man.display();
  man.edges();

  //Silly hard code
  noStroke();
  fill(255,0,100);
  rect(400,height-50,100,100);
  
  bad.update();
  bad.show();
}
