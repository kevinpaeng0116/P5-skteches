let b1, b2, c1, c2;

function setup() {
  createCanvas(1000, 1000);
  
  b1 = color(255);
  b2 = color(0);
  c1=color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {

  setGradient(0, 0, 300, 300, c1, c2);

  drawS(90, 30, color(12, 121, 34), color(167, 121, 89))
}

function setGradient(x,y,w,h,c1,c2){
  for(let i = x; i <= x + w; i++){
    let inner = map(i,x,x+w,0,1);
    let c = lerpColor(c1, c2, inner);
    stroke(c);
    line(i,y,i, y+h);
  }
  
}


function drawS(xValue, yValue, color1, color2){
	const ogX = xValue;
	//Top of S
	drawLine(ogX, yValue, color1, color2);

	//First Side of S(left)
  	fill(color2);
  	square(xValue, yValue+=25, 25);

  	fill(color1);  	
  	square(xValue, yValue += 25, 25);
  	
  	fill(color2);
  	square(xValue, yValue += 25, 25);

  	//Middle line of S
  	drawLine(ogX, yValue += 25, color1, color2);

  	//Second Side of S(right)
  	fill(color2);
  	square(xValue+=100, yValue+=25, 25);

  	fill(color1);
  	square(xValue, yValue += 25, 25);
 	
	  fill(color2)
  	square(xValue, yValue+=25, 25);

  	//draw bottom line
  	drawLine(ogX, yValue+=25, color1, color2);
}

function drawLine(xValue, yValue, color1, color2){
	fill(color1);
  	square(xValue, yValue,25);

	fill(color2);
  	square(xValue += 25,yValue,25);

	fill(color1);
  	square(xValue += 25, yValue, 25);

	fill(color2);
  	square(xValue += 25,yValue,25);

	fill(color1);
  	square(xValue += 25, yValue, 25);
}