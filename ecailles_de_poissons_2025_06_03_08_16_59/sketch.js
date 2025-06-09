function setup() {
  createCanvas(400, 400);
  noStroke();
  print (12 % 3);
}

function draw() {
  background(220);

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      
      let r = (frameCount + x * 60) % 255;
      let g = (frameCount + y * 100) % 255;

      fill(r, g, 255);
      circle(x * 60, y * 50, 50);
      square(x * 50, y * 50, 50);
    }
  }
}