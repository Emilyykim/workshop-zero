function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
let a = createVector(10, 10);
point(a);
let b = createVector(10, 20);
point(b);
let c = createVector(20, 10);
point(c);
let d = createVector(20, 20);
point(d);
describe(
  'Four small, black points drawn on a gray canvas. The points form the corners of a square.'
);
}