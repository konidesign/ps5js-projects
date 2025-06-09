function setup() {
  createCanvas(400, 400);
  background(220);
  
  // variable simple
  let taille = 50;
  circle(30, 50, taille);
  
  textSize(36);
}

function draw() {}

// Array:
let mots = ["Oui", "Non", "Peut-être", "explosion", "saucisse"];

mots[2] = "Chaussette";

mots.push("bananana");


let i = 0; // i pour index
function mousePressed(){
  text(mots[i], mouseX, mouseY);
  i++;
  if(i >= mots.length){ i = 0; }
}

console.log(mots.length);

console.log(mots)