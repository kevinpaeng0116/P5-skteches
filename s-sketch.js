let img;
function setup() {
  createCanvas(1000, 1000);
  img = loadImage('./635426.jpg');

}

function preload(){
  
}

function draw() {
  image(img, 0, 0);
  fill(205,211,211)
  textSize(700);

  text("S",250,800);

  
  for(let x = 0; x < 1000; x+=10){
    for(let y = 0; y < 1000; y+=10){
      fill(get(x,y));
      circle(x,y,8);
    }
  }
}

































