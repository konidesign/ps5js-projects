function setup() {
  createCanvas(400, 400);
}

  let mistake = 1;
  let happyaccident = 160;


function draw() {
  // background(100, 23, 42);
  circle( 200, 200, mistake )
  square( 200, 200, happyaccident );
  mistake = mistake + 0.01;
  happyaccident = mistake -200;
}
