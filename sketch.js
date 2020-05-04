let ground;
let box;
let ball;

function setup() {
  createCanvas(600, 400);
  ground = new Box(0, height-20, width, 20);
  box = new Box(450, 300, 50, 75);
  ball = new Ball(50, 300, 25);
}

function draw() {
  background(0);
  ground.show();
  box.show();
  ball.show();
}
