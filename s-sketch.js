function setup() {
  createCanvas(1000, 1000);
}

function draw() {
	 fill(255,255,255);
  	strokeWeight(25);
  	strokeCap(ROUND);
  	
	line(350, 300, 460, 270);
  	line(350, 300, 300, 450);
  	line(300, 450, 430, 410);
  	line(430, 410, 400, 530);
  	line(270, 570, 400, 530);

	fill(0)
  	strokeWeight(2);
  	triangle(460, 258, 490, 250, 468, 279);
	triangle(270, 558, 240, 568, 269, 582);
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