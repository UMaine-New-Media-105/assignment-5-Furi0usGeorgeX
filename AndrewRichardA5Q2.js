function setup() {
  createCanvas(960, 540);
  bubbles = [];

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    bubbles[bubblesDrawn];
    let thisX = random(width);
    let thisY = random(height);
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY);
  }
}

function draw() {
  background("black");

  for (let bubblesShown = 0; bubblesShown < 50; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    push();
    noStroke();
    frowny(this.x, this.y);
    pop();
  }
}

function frowny(x, y) {
  translate(x, y);
  noStroke();
  fill("red");
  ellipse(50, 50, 50);
  fill("black");
  ellipse(40, 45, 5);
  ellipse(60, 45, 5);
  stroke(1);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(35, 35);
  vertex(50, 40);
  vertex(65, 35);
  endShape();
  beginShape();
  vertex(35, 65);
  vertex(40, 60);
  vertex(60, 60);
  vertex(65, 65);
  endShape();
}
