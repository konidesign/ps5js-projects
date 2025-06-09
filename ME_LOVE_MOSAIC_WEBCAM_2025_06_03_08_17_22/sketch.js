let webcam;
let cols = 100;
let rows = 100;
let w, h;

function setup() {
  createCanvas(500, 500);
  webcam = createCapture(VIDEO);
  webcam.size(50, 50);

  w = width / cols;
  h = height / rows;
}

function draw() {
  background(0);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      image(webcam, x * w, y * h, w, h);
    }
  }
}