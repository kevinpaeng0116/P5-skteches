function setup() {
  createCanvas(1000, 1000);
}

function draw() {
	//Top of S
	drawLine(10);

	//First Side of S(left)
  	fill(255, 0, 0);
  	square(10, 35, 25);

  	fill(0, 0, 255);
  	
  	square(10, 60, 25);
  	fill(255, 0, 0);
  	square(10, 85, 25);

  	//Middle line of S
  	drawLine(110);

  	//Second Side of S(right)
  	fill(255, 0, 0);
  	square(110, 135, 25);

  	fill(0, 0, 255);
  	square(110, 160, 25);

  	fill(255, 0, 0);
  	square(110, 185, 25);

  	//draw bottom line
  	drawLine(210);
}

function drawLine(yValue){
	fill(0, 0, 255);
  	square(10,yValue,25);

	fill(255, 0, 0);
  	square(35,yValue,25);

	fill(0, 0, 255);
  	square(60, yValue, 25);

	fill(255, 0, 0);
  	square(85,yValue,25);

	fill(0, 0, 255);
  	square(110, yValue, 25);
}