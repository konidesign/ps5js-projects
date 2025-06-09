function setup() {
  createCanvas(200, 200);
  background(220);

  // Oreilles
  fill(150);
  triangle(60, 100, 80, 60, 100, 100); // gauche
  triangle(140, 100, 120, 60, 100, 100); //droit

  // Yeux
  fill(0);
  ellipse(85, 120, 10, 10); // gauche
  ellipse(115, 120, 10, 10); // droit

  // Bouche
  fill(0);
  triangle(95, 145, 105, 145, 100, 135);
}

function mousePressed() {
  let miaou = new SpeechSynthesisUtterance("Miaou");
  speechSynthesis.speak(miaou);
}