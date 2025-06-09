let boxSize = 1000;
let posX = 123;
let posY = 234;

let vitX = 6;
let vitY = 10;

let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

let growth = -10;
let backgroundFlash = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(r, v, b);
}

function draw() {

  let bgColor = lerp(10, 100, backgroundFlash);
  background(bgColor);

  fill(r, v, b);
  square(posX, posY, boxSize);
  noStroke();

  posX += vitX;
  posY += vitY;

  if (posX + boxSize > width || posX < 0) {
    vitX *= -1;
    BounceManager();
  }

  if (posY + boxSize > height || posY < 0) {
    vitY *= -1;
    BounceManager();
  }


  backgroundFlash *= 0.9; 
}

function BounceManager() {
  r = Math.random() * 255;
  v = Math.random() * 255;
  b = Math.random() * 255;
  boxSize += growth;


  backgroundFlash = 5; 
}