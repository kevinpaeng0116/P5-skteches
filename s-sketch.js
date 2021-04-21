
let b1, b2, c1, c2;

function setup() {
  createCanvas(1000, 1000);
  b1 = color(255);
  b2 = color(0);
  c1=color(204, 102, 100);//left
  c2 = color(0, 102, 153);//right

  noLoop();
}

function draw() {
  setGradient(0, 0, 1000, 1000, c1, c2);
  quad(330, 100, 430, 100, 300, 300, 200, 300);

  quad(200, 330, 300, 330, 430, 530, 330, 530);

  quad(330, 560, 430, 560, 300, 730, 200, 730);

  fill(c1 );
  quad(600, 100, 700, 100, 800, 300, 700, 300);
  quad(700, 330, 800, 330, 700, 530, 600, 530);
  quad(600, 560, 700, 560, 800, 730, 700, 730);
}

function setGradient(x,y,w,h,c1,c2){
  for(let i = x; i <= x + w; i++){
    let inner = map(i,x,x+w,0,1);
    let c = lerpColor(c1, c2, inner);
    stroke(c);
    fill(c);
    line(i,y,i, y+h);
  }
  
}


















