[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pJv4oXRo)
Assignment 5 has to do with creating our own simulation game.

Question 1 asks that we create 5 jittering bubbles. I did so by using a constructor to draw the bubbles randomly across the canvas, and having them move randomly in any direction 0 to 5 pixels at a time, as seen below.

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
  
  Note that what is being displayed is a function named "frowny". I thought the jittering looked somewhat aggressive, so I changed the bubbles' appearance to reflect that.
   
  -------------------------------------------------------------------------------------------------------------------------------------------

  Question 2 asks that 50 bubbles be drawn this time. I did so by changing this:
  
   for (let bubblesDrawn = 0; bubblesDrawn < 5; bubblesDrawn++) {
    bubbles[bubblesDrawn];
    let thisX = random(width);
    let thisY = random(height);
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY);
  }
}

function draw() {
  background("black");

  for (let bubblesShown = 0; bubblesShown < 5; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
}

to this:

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

Just to narrow it down, "bubblesShown < 5;" and "bubblesDrawn <5" were changed from 5 to 50.

------------------------------------------------------------------------------------------------------------------------------------------

Question 3 asks to create two additional classes. The original frowny face class is now a background "particle". The two new classes are breeders and catchers. The breeders are Cryptids, made from the new function Wendigo. The catchers are Swords, made from the new function blade. The swords start on the left, and the cryptids start on the right.

-------------------------------------------------------------------------------------------------------------------------------------------

Question 4 asks to enable the breeders, in this simulation they are the "cryptids".
I followed the tutorial but was unable to get the breeders to populate correctly. Instead, when the breeders come into contact, their "offspring" simply flashes for a single frame on screen before disappearing again. I have agonized over this for days, well past the due date (after several days of trying to figure out why the simulation kept crashing my browser), and am giving up. On to the next question.

-------------------------------------------------------------------------------------------------------------------------------------------

Question 5 asks to enable the catchers, in this case the "swords". We accomplish this by removing a breeder from its array when it comes into contact with a catcher. The code successfully deletes an individual breeder when touched by a catcher, but this does crash the simulation again for some reason.
