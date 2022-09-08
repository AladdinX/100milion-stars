
function setup() {
  //
  createCanvas(windowWidth, windowHeight);
  background(1);
  strokeWeight(random());
  
  for(let i=0;i<random(10000000);i++){
    stroke(random(255),random(255),random(255),random(100));
    ellipse(random(width),random(height),random());
  }
}

  function mousePressed() {
 window.location.reload()
}
