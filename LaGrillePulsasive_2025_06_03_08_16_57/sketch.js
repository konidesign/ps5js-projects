function setup() {
  createCanvas(400, 400);
  background(220);
  
}


let greenPos = 0;
let greenVit= 0.1;


function draw() {
  
    for (let y = 0; y < 8; y++ ){

    for (let x = 0; x < 8; x++ ){
    noStroke();
      
    let r = x*32;
    let v = greenPos;
    let b = y*32;
      
    fill(r, v, b);
    square (x*50, y* 50, 50);
    
    greenPos+=greenVit;
    if (greenPos<0||greenPos>255){
    greenVit *=-1;

    }

  }

 }
    
}
