let webcam;
let cols = 20;
let rows = 20;
let w, h;

let buffer = [];
let maxDelay = 400; // 20 x 20

function setup() {
  createCanvas(400, 400);
  webcam = createCapture(VIDEO);
  webcam.size(50, 50);
  webcam.hide();

  w = width / cols;
  h = height / rows;
}

function draw() {
  // Sauvegarder une copie de la webcam
  buffer.push(webcam.get());

  // Supprimer les plus vieilles frames
  if (buffer.length > maxDelay) {
    buffer.shift();
  }

  background(0);

  let index = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {

      let frameIndex = buffer.length - 1 - index;

      if (buffer[frameIndex]) {
        image(buffer[frameIndex], x * w, y * h, w, h);
      }

      index++;
    }
  }
}