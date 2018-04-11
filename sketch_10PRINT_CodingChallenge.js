// Michael Lam
// April 10, 2018
// C64 lines.
// Technically the code belongs to Dan Shiffman but I typed it so that's nice.

let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) < 0.3) {
    line(x, y, x + 10, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}