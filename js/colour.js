function setup(){
  background(0);
  createCanvas(500, 500);
  noStroke();
  fill(102);
  colorMode(HSB, 100);
}

function draw(){
    for (i = 0; i < 100; i++) {
      for (j = 0; j < 100; j++) {
        stroke(i, j, 100);
        point(i, j);
      }
    }
}