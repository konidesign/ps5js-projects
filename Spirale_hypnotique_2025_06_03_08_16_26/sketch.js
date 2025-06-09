function setup() {
  createCanvas(600, 400);
  background(00, 00, 00);
}

let taille = 650

function draw(){
  circle (300, 200, taille);
  taille = taille -1;
  taille = taille -1;
  taille = taille -0.3;
  taille = taille -0.6;
  taille = taille -0.2;
}