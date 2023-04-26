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
