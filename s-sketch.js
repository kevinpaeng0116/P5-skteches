let img;
function setup() {
  createCanvas(1000, 1000);
  img = loadImage('./635426.jpg');

}

function preload(){
  
}

function draw() {
  image(img, 0, 0);
  textSize(50);

  text("S",10,60);
  for(let x = 0; x < 1000; x+=10){
    for(let y = 0; y < 1000; y+=10){
      fill(get(x,y));
      circle(x,y,8);

        fill(0,0,0);
    strokeWeight(50);
    line(280, 330, 520, 370);
    strokeCap(SQUARE)
    line(350, 300, 460, 270);
    line(350, 300, 300, 450);
    line(300, 450, 430, 410);
    line(430, 410, 400, 530);
    line(270, 570, 400, 530);
    }
  }
}

































