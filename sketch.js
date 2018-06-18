var stars = [];
var starsize = 800;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < starsize; i++) {
    stars[i] = new Star(400, 400);
  }
}

function draw() {
  speed = map(mouseX, 0, this.width, 0, 20);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
