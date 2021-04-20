
//var inc = 0.01;
var start0 = 0;
var start1 = 0;
var start2 = 0;

function setup() {
  createCanvas(700, 700);
} 

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start0;
  for(var x=0; x < width; x++){
    strokeWeight(10);
    stroke(113, 238, 184, 90);
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff+=0.002;
  }
  endShape();
  start0 += 0.002;

  beginShape();
  var xoff = start1;
  for(var x=0; x < width; x++){
    stroke  (255,61,65,90);
    strokeWeight(10);
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff+=0.0023;
  }
  endShape();
  start1 += 0.0023;

  beginShape();
  var xoff = start2;
  for(var x=0; x < width; x++){
    stroke(255, 204, 0, 90);
    strokeWeight(10);
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff+=0.0025;
  }
  endShape();
  start2 += 0.0025;

  noLoop();

}
