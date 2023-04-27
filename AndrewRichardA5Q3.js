function setup() {
  createCanvas(960, 540);
  bubbles = [];
  swords = [];
  cryptids = [];

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    bubbles[bubblesDrawn];
    let thisX = random(width);
    let thisY = random(height);
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY);
  }
  
    for (let swordsDrawn = 0; swordsDrawn < 5; swordsDrawn++) {
    swords[swordsDrawn];
    let thisX = 50;
    let thisY = random(height);
    swords[swordsDrawn] = new Sword(thisX, thisY);
  }
  
      for (let cryptidsDrawn = 0; cryptidsDrawn < 5; cryptidsDrawn++) {
    cryptids[cryptidsDrawn];
    let thisX = width - 100;
    let thisY = random(height);
    cryptids[cryptidsDrawn] = new Cryptid(thisX, thisY);
  }
}

function draw() {
  background("black");

  for (let bubblesShown = 0; bubblesShown < 50; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
  
   for (let swordsShown = 0; swordsShown < 5; swordsShown++) {
    swords[swordsShown].move();
    swords[swordsShown].show();
  }
  
     for (let cryptidsShown = 0; cryptidsShown < 5; cryptidsShown++) {
    cryptids[cryptidsShown].move();
    cryptids[cryptidsShown].show();
  }
}

class Bubble { //Particle
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
    frowny(this.x, this.y, 0.5);
    pop();
  }
}

class Sword { //Catcher
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = 0.5
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    push();
    noStroke();
    blade(this.x, this.y, 0.5);
    pop();
  }
}

class Cryptid { //Breeder
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = 0.5
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    push();
    noStroke();
    wendigo(this.x, this.y, 0.8);
    pop();
  }
}

function frowny(x, y, size) {
  push();
  translate(x, y);
  scale (size);
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
  pop();
}

function blade(x,y,size){
  push();
  translate(x,y);
  scale(0.2);
  fill(200,210,220);
  beginShape();
  vertex(30,50);//tipbottomleft
  vertex(250,270);//bladebottomleft
  vertex(310,210);//rightcrossguardtop
  vertex(310,230);//rightcrossguardbottom
  vertex(285,270);//hiltright
  vertex(360,340);//hiltbottom
  vertex(350,350);//hiltleft
  vertex(275,280);//hilttopleft
  vertex(230,310);//leftcrossguardbottom
  vertex(210,310);//leftcrossguardtop
  vertex(270,250);//bladebottomrigh
  vertex(50,30);//tipbottomright
  vertex(0,0);//tip
  endShape(CLOSE);
  pop();
}

function wendigo(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  // Draw the body
  noStroke();
  fill(255, 255, 255);
  ellipse(0, 0, 60, 80);

  // Draw the head
  fill(240, 240, 240);
  ellipse(0, -30, 40, 50);

  // Draw the antlers
  stroke(150, 100, 60);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(-20, -50);
  vertex(0, -70);
  vertex(20, -50);
  vertex(10, -40);
  vertex(5, -45);
  vertex(0, -40);
  vertex(-5, -45);
  vertex(-10, -40);
  vertex(-20, -50);
  endShape();

  // Draw the eyes
  noStroke();
  fill(0);
   ellipse(-10, -30, 10, 5);
  ellipse(10, -30, 10, 5);
  fill(255,0,0);
  ellipse(-10, -30, 2, 2);
  ellipse(10, -30, 2, 2);

  // Draw the nose
  stroke(0);
  strokeWeight(2);
  line(0, -20, 0, -10);
  noFill();
  arc(0, -10, 20, 20, 0, PI);

  // Draw the teeth
  stroke(255);
  strokeWeight(2);
  line(-5, -5, -10, 0);
  line(5, -5, 10, 0);
  line(0, -5, 0, 0);

  pop();
}
