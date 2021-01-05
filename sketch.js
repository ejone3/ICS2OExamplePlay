var man;
var bad = [];

function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100; i++) {
    bad[i] = new Obstacle();
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
  background(51);
  
  // changed this number, not sure what it does, will check it out later
  translate(-man.pos.x + 50, 0);
  
  let gravity = createVector(0, 0.05);
  man.applyForce(gravity);
  
  man.update();
  man.display();
  man.edges();
  
  for (let i = 0; i < 10; i++) {
    if(man.hits(bad[i])) {
      console.log("Game Over!!");
      console.log(bad[i].pos.x);
    }
    bad[i].show();
    bad[i].update();
  }
}
