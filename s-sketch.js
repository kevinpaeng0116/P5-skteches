function setup() {
  createCanvas(1000, 1000);
}

function draw() {
	//top S
	//drawS(10, 10, color(255,0,0), color(0,0,252));

  	//Bottom S
  	//drawS(40, 40, color(0,255,0), color(100,100,20));
  	//noStroke();
  	strokeWeight(0)
	fill(0,0,0);
  	arc(400, 300, 280, 280, PI, TWO_PI);
  	arc(400, 400, 280, 280, TWO_PI, PI);

  	fill(255,255,255);
  	//circle(300, 150, 40);
  	circle(400, 300, 140);
  	circle(400, 400, 140);

  	fill(0,0,0);
  	strokeWeight(50);
  	line(280, 330, 520, 370);
}

function drawS(xValue, yValue, color1, color2){
	const ogX = xValue;
	//Top of S
	drawLine(ogX, yValue, color1, color2);

	//First Side of S(left)
  	fill(color1);
  	square(xValue, yValue+=25, 25);

  	fill(color2);  	
  	square(xValue, yValue += 25, 25);
  	
  	fill(color1);
  	square(xValue, yValue += 25, 25);

  	//Middle line of S
  	drawLine(ogX, yValue += 25, color1, color2);

  	//Second Side of S(right)
  	fill(color1);
  	square(xValue+=100, yValue+=25, 25);

  	fill(color2);
  	square(xValue, yValue += 25, 25);

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