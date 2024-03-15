let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  rect(x,100,40,60)
  
  if(x > width) { 
    x = -5;
  }
   
  x = x + 3;
                
}