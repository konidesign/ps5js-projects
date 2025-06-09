function setup() {
  createCanvas(600, 400);
  background(0, 0, 255);
}

let taille = 1;
let growth = 4;

function draw() {
  stroke(255);
  strokeWeight(0.4);
  noFill();

  let largeur = taille * 1.5;
  let hauteur = taille;

  ellipse(300, 200, largeur, hauteur);
  taille += growth;

  if (taille > 200 || taille < 2) {
    growth += -2;
  }
}