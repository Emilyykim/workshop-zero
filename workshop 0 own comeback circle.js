let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(x,100,40,60)
  x=x+3
  if(x>width){x=0}
}