let x=0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(255,0,0)
  fill(255,255,0,255)
  rect(mouseX,100,40,60)
  
  x=x+3;
}