function setup() {
  createCanvas(1000, 1000);
}

function draw() {
fill(25, 25, 25);
for(var x = 0; x < 1000; x+=50){
  for (var i = 0; i < 1000; i+= 50) {
    let rand = random(1, 50);
    square(i, x, rand);
   }
 }


push();
stroke(0);
fill(100,100,100);
 rect(300, 300, 350, 100);
 rect(300, 300, 100, 200);
 rect(300, 500, 350,100);
 rect(550, 600, 100, 200);
  rect(300,700, 350, 100)
}


















