let bouncy = {
  
  size: 16,
  posX: 100,
  posY: 200,
  vitX: Math.random(1) -50,
  vitY: Math.random(60) -50,
  name: "A bouncy thing",
  
  bouger: function (){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;  // posY = posY + vitY
  },
  
  rebondir: function (){
    if( this.posX + this.size > width || this.posX < 10 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 10 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  },
  
  afficher: function (){
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    //this.afficher();
  }

}; // bouncy object


let Blabla = Object.create(bouncy);
Blabla.name = "Bouncy McBounceface";
Blabla.vitX = Math.random(8) -10;
Blabla.vitY = Math.random(8) -100;

let Chaton = Object.create(bouncy);
Chaton.name = "Copy 2 of Bouncy déf bis";
Chaton.vitY = Math.random(10) -5000;
Blabla.vitY = Math.random(10) -5000;

let Delta = Object.create(bouncy);
Delta.name = "Copy 2 of Bouncy déf bis";
Delta.vitY = Math.random(100) -500;
Delta.vitY = Math.random(100) -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
}

function draw() {
  background(0,0,0,3);
  bouncy.update();
  Blabla.update();
  Chaton.update();
  Delta.update();
  
  noFill();
  stroke(255);
  bezier(
    bouncy.posX, bouncy.posY,
    Blabla.posX, Blabla.posY,
    Chaton.posX, Chaton.posY,
    Delta.posX, Delta.posY,
  );
}