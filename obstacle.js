class Obstacle {
  constructor(v) {
    this.pos = createVector(random(man.pos.x + 40, man.pos.x + 1200), random(height - 11));
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0, 0);
    this.value = v || 1;
    this.colour = color(random(255), random(255), random(255));
  }

  show() {
    noStroke();
    if (this.colour === color("yellow") || this.colour === color(255, 255, 0)) {
      fill(109, 189, 149);
    } else {
      fill(this.colour);
    }
    // changing these numbers makes the collision not work, why?
    rect(this.pos.x, this.pos.y, 10, 10) // try changing the numbers in person collision too
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  hits(obs) {
    for (let i = 0; i > obs.length; i++) {
      if ((obs[i].pos.x >= this.pos.x && obs[i].pos.x <= (this.pos.x + 10)) && (obs[i].pos.y >= this.pos.y && obs[i].pos.y <= (this.pos.y + 10))) {
        obs.pos.x += 12;
      }
    }
  }
}

class Special extends Obstacle {
  constructor() {
    let v = 5;
    super(v);
  }

  show() {
    noStroke();
    fill(255, 255, 0);
    rect(this.pos.x, this.pos.y, 10, 10)
  }
}
