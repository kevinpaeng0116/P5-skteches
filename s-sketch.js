function setup() {
  createCanvas(1000, 1000);
}

function draw() { 
  fill(20, 20, 255);
  square(0,0,1000);
  fill(255, 255, 0);
  square(300, 300, 300);
  textSize(200);
  fill(255,20, 20);
  text("S", 380,520)

  noStroke();
  fill(0,0,0);
  rect(350,300, 250, 72);
  fill(20, 20, 255);
  triangle(450,300, 600, 300, 600, 450);
  triangle(600, 370, 600, 600, 450, 600);
  triangle(300, 370, 300, 600, 450, 600);
  triangle(450, 300, 300, 300, 300, 450);
  rect(350,300, 250, 70);


var x = 1;
for (var i = 50; i > 0; i--) {
  fill(255, 255, 255, i)
  ellipse(mouseX, mouseY, x, x);
  x+= 2;
}

 //
  //

}



















