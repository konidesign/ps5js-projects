let boxSize = 5000;
let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 1.234;

let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

let growth = -50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  print (r,v,b)
}

function draw() {
  background(220);
  fill (r,v,b);
  square(posX, posY, boxSize);

  posX += vitX;
  posY += vitY;

  if (posX + boxSize > width || posX < 0) {
      vitX *= -1;
      BounceManager()
  }

  
  if (posY + boxSize > height || posY < 0) {
      vitY *= -1;
      BounceManager()
  }
}



function BounceManager (){

  r = Math.random () * 255;
  v = Math.random () * 255;
  b = Math.random () * 255;
  boxSize += growth;



}


