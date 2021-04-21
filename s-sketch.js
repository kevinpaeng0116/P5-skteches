function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  //translate
  //raotate
  push();
  fill(222,0,0);
  translate(600, 300);
  square(0,0,100);
  rotate(.2);

  fill(189,0,0)
  square(150, 60,100);

  pop();
  fill(140,0,0)
  rect(360, 300, 200, 100);

fill(125,0,0)
  ellipse(340, 480, 100);
  fill(110,0,0)
  ellipse(420, 580, 90);

fill(101,0,0)
  triangle(470, 570, 823, 590, 823, 680);

fill(70,0,0)
  quad(823, 700, 823, 730, 520, 880, 500, 810);

fill(10,0,0)

  arc(450, 730, 280, 300, 20, 110);



}


















