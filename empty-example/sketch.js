var r, g, b;
var size;
var offset;

function setup() {
  createCanvas(700, 700);
    background(220);
  size = width/100;
} 

function draw() { 

  stroke(255);

  
  for (var x=0; x < width; x+=size) {
    for (var y=0; y < height; y+=size) {
      r = random(255);
      g = random(255);
      b = random(255);
      strokeWeight(0);
      rect (x, y, size, size);
      fill (r, g, b);
      noLoop();
    }
  }
  

  
}
  
function mousePressed() {
  loop();
  size = random(width/200, width/10);
}