class Obstacle {
  constructor(){
    // the final number was 50 before, why?
    this.pos = createVector(random(man.pos.x + 40, man.pos.x + 1200), random(height - 10));
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0, 0);
  }
  
  show(){
    fill(random(255), random(255), random(255));
    // changing these numbers makes the collision not work, why?
    rect(this.pos.x, this.pos.y, 10, 10)
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
