let x = 100;
let y = 100;
let taille = 40;

let vitesseX = 2;
let boucheOuverte = true;

function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  JadorePacmanYoupi();
  deplacer();
}

function JadorePacmanYoupi() {
  fill(255, 255, 0);
  noStroke();
  
  if (boucheOuverte) {
    arc(x, y, taille, taille, 45, 315, PIE);
  } else {
    arc(x, y, taille, taille, 0, 360, PIE);
  }

  

  
  if (frameCount % 10 === 0) {
    boucheOuverte = !boucheOuverte;
  }
}

function deplacer() {
  x += vitesseX;
  
  if (x > width + taille / 2) {
    x = -taille / 2;
  }
  
}