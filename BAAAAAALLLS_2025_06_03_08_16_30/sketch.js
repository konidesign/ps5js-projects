function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  background(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 500, 500);
  ellipse(random(width), random(height), 100, 100);
  ellipse(random(width), random(height), 50, 50);
  ellipse(random(width), random(height), 10, 10);
  
  
}
