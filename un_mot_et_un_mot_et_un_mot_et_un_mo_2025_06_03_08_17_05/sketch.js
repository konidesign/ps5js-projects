let mots = ["Oui", "Non", "Peut-être", "explosion", "saucisse"];
mots[2] = "Chaussette";
mots.push("bananana");

let i = 0;
let tailleTexte = 36;
let afficherMot = false;
let motActuel = "";
let x, y;

function setup() {
  createCanvas(400, 400);
  background(220);
  textAlign(CENTER, CENTER);
}


function setup() {
  let ratio = windowWidth / windowHeight;
  if (ratio > 1) {
    // paysage : s'adapte à hauteur
    createCanvas(windowHeight, windowHeight);
  } else {
    // portrait : s'adapte à largeur
    createCanvas(windowWidth, windowWidth);
  }
}

function windowResized() {
  setup(); // relance setup pour recalculer taille
}

function draw() {
  background(220);

  if (afficherMot) {
    textSize(tailleTexte);
    fill(0);
    text(motActuel, x, y);
    
    tailleTexte += 5;

    if (tailleTexte > 150) { 
      afficherMot = false;
      tailleTexte = 36;
    }
  }
}

function mousePressed() {
  motActuel = mots[i];
  x = mouseX;
  y = mouseY;
  afficherMot = true;
  
  i++;
  if (i >= mots.length) { i = 0; }
}