var t;

function setup() {
  createCanvas(700, 700);
  // background(255);
  t = 0;
}

function draw() {
  // fade the background by giving it a low opacity
  // background(0, 1);

  var x = width * sin(t);
  var y = height * noise(t+5);
  // var constrained_x = constrain(x, 0, 700);
  // var constrained_y = constrain(y, 0, 700);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  var size0 = 120*sin(t+40);
  var size1 = 120*sin(t+40);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, size0, size1);

  t = t + 0.005;
}