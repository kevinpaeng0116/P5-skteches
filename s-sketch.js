function setup() {
  createCanvas(1000, 1000);
}

function draw() {
if(mouseIsPressed){
	fill(0);
}else{
	fill(255)
}

ellipse(mouseX, mouseY, 80, 80);
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