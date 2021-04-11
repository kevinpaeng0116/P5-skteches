function setup() {
  createCanvas(1000, 1000);
}

function draw() {

	drawS(300, 300, color(255,0,0), color(0,0,255));


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