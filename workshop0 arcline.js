function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
describe(
  'A shattered outline of an ellipse with a quarter of a white circle at the bottom-right.'
);
}