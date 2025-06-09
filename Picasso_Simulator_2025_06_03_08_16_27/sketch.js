function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let R = random(255);
  let V = random(255);
  let B = random(255);
  background(R,V,B);
}

function draw() {
  circle(mouseX,mouseY,50);
  }
  
function mouseClicked(){
  let R = random(255);
  let V = random(255);
  let B = random(255);
  fill(R,V,B);
}

function keyPressed(){
  if( key == "s"){
    save ("drawing.png");
  }
}