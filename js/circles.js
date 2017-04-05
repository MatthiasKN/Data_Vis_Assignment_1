function setup() {
  createCanvas(500,500);
}

function calcColor(dist, maxDist){
  var ans = int(dist/maxDist*255);
  return ans;
}

function calcRadius(dist, maxDist, maxRadius, minRadius){
  var ans = int(dist/maxDist*(maxRadius-minRadius));
  ans+=minRadius;
  return ans;
}

function draw() {
  clear();
  for(i = 0; i<20; i++){
    for(j = 0; j<20; j++){
      var d = dist(mouseX, mouseY, i*20+12.5, j*20+12.5);
      var col = calcColor(d,500);
      var rad = calcRadius(d, 500, 25, 3);
      var c = color(col);
      fill(c);
      ellipse(i*25+12.5, j*25+12.5, rad, rad);
    }
  }
}