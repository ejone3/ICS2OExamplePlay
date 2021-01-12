function Scenes() {
  
  // scene 1, the start scene
  this.draw1 = function() {
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
  
   // scene 2, the game
   this.draw2 = function() {
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
      bad[i].hits(bad);
      bad[i].show();
      bad[i].update();
    }

    for (let j = 0; j < 25; j++) {
      if (man.hits(bonus[j])) {
        console.log(bonus[j].pos.x);
      }
      bonus[j].hits(bonus);
      bonus[j].hits(bad);
      bonus[j].show();
      bonus[j].update();
    }

    if (endSceneCountdown > 1210) {
      this.draw3();
    }
  }
  
  // scene 3, the end screen
  this.draw3 = function() {
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
    text("You reached the end of the game! Your score was " + man.score + ".", width/2, 50);
    if (man.score === 0) {
      text ("You can do it! Try again?", width/2, 100);
    } else if (man.score > 0 && man.score <= 10) {
      text("Not bad, play again if you want to improve your score.", width/2, 100);
    } else if (man.score > 0 && man.score <= 20) {
      text("Wow! Pretty good.", width/2, 100);
    } else if (man.score > 0 && man.score <= 30) {
      text("Amazing!!", width/2, 100);
    } else if (man.score > 0 && man.score <= 40) {
      text("Incredible!!!", width/2, 100);
    } else if (man.score > 0 && man.score <= 50) {
      text("Very good!!", width/2, 100);         
    } else if (man.score > 0 && man.score < 225) {
      text("What a high score!!! Try and get your friends to beat it!!", width/2, 100);
    } else if (man.score > 0 && man.score === 225) {
      text("Perfect score??! No way!!", width/2, 100);
    } else {
      text("Um, how did you- Nevermind, I'm not gonna ask. Congrats on that.", width/2, 100);
    }
    text("Just click to restart", width/2, 300);
  }
}
