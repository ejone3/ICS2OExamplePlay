// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

// This is the main character in the game

function Person() {
  this.pos = createVector(50, height-10);
  this.vel = createVector(0.25, 0);
  this.acc = createVector(0, 0);
  this.score = 0;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(10);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    stroke(255);
    rect(this.pos.x, this.pos.y, 10, 10);
    
    stroke(20, 20, 20);
    textSize(100);
    text(this.score, this.pos.x, 100);
  }
  
  this.hits = function(obs) {
     if((obs.pos.x >= this.pos.x && obs.pos.x <= (this.pos.x + 10)) && (obs.pos.y >= this.pos.y && obs.pos.y <= (this.pos.y + 10))) {
      this.score++;
      obs.pos.y = -400;
    }
    //collideRectRect(this.pos.x, this.pos.y, 10, 10, obs.pos.x, obs.pos.y, 10, 10);
  }
  
  // I changed some of these numbers so that my person is displayed on the ground properly
  this.edges = function() {
    if (this.pos.y > height - 11) {
      this.vel.y *= 0;
      this.pos.y = height - 11;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }
}
