// JavaScript Document//

//character//
var hillx = 455;
var hilly = 300;

//keys//
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y//
var cloudX = 400;
var cloudY = 588;

var cloudXs = [];
var cloudYs = [];
var diameters = [];

var cloudXspeed = [];
var cloudYspeed = [];

var clickMx;
var clickMy;


function setup ()
{

	createCanvas(800,800);
	
	//random speed//
	for (var i = 0; i < 50; i++) 
	{
        cloudXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        cloudYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        cloudXs[i] = getRandomNumber(500);
        cloudYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
	}
}

function draw()
{
	background(201,223,242);
	//////////////////
	
	//clouds//
    fill(255,255,255);
    // draw the shape
    for (var i = 0; i < cloudXs.length; i++) 
	{
        circle(cloudXs[i], cloudYs[i], diameters[i]);
        cloudXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        cloudYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        cloudXs[i] += cloudXspeed[i];
        cloudYs[0] += cloudYspeed[i];
		
        // check to see if the shape has gone out of bounds
        if (cloudXs[i] > width) {
            cloudXs[i] = 0;
        }
        if (cloudXs[i] < 0) {
            cloudXs[i] = width;
        }
        if (cloudYs[i] > height) {
            cloudYs[i] = 0;
        }
        if (cloudYs[i] <= 0) {
            cloudYs[i] = height;
		}
	}
	
	
	//place the mountain//
	createPlayer();
	//lawn//
	fill(41,64,19);
	rect(-2, 514,900,600)
	//path//
	fill(191,141,122);
	triangle(256, 803, 408, 402, 530, 803);
	
	
	
	
	movement();
		//roof//
	fill(107,199,168);
	triangle(341, 200, 410, 74, 475, 200);
	rect(350,135,115,55);
	//trim//
	fill(255,255,255);
	triangle(404, 84, 410, 74, 416, 84);
	rect(409,60,2,20);
	//main body roof//
	fill(140,140,140);
	triangle(85, 340, 140, 248, 180, 341);
	triangle(600, 341, 630, 248, 685, 341);
	rect(140, 248, 490,150)
	
	//center tower//
	fill(191, 90, 54);
	strokeWeight(0);
	rect(350,200,100,300);
	//clock//
	fill(191, 106, 75);
	ellipse(407,255,60,60);
	fill(0,0,0);
	ellipse(407,255,40,40);
	//clock hands//
	fill(255,255,255);
	ellipse(407,255,5,5);
	rect(406,237,2,25);
	rect(400,254,25,2);
	
	
	//centered window//
	fill(255,255,255);
	triangle(387, 159, 409, 119, 433, 159);
	fill(191, 106, 75);
	square(390,155,40);
	triangle(389, 157, 409, 120, 431, 157);
	//trim//
	fill(191,191,191);
	rect(390,156,40,2);
	rect(390,190,40,2);
	rect(430,155,5,40);
	rect(385,155,5,40);
	fill(255,255,255);
	triangle(385, 156, 387, 152, 390, 156);
	triangle(430, 156, 432, 152, 435, 156);
	triangle(406, 120, 409, 115, 412, 120);
	
	//main body//
	fill(191, 90, 54);
	rect(85,340,600,180);
	
	fill(191, 106, 75);
	//side pillars//
	rect(340,190,25,320);
	rect(450,190,25,320);
	fill(255,255,255);
	triangle(340, 192, 353, 170, 366, 192);
	triangle(450, 192, 464, 170, 476, 192);
	//trim//
	fill(191,191,191)
	rect(339,345,136,3);
	rect(339,290,136,3);
	rect(339,217,136,3);
	
	
	
	//entance//
	fill(191,191,191);
	rect(340,400,135,120);
	////////////////
	fill(217,217,217);
	rect(340,400,135,40);
	fill(140,140,140);
	ellipse(407,463,40,40);
	rect(387,460,40,50);
	
	//stairs//
	fill(89,89,89);
	rect(387,504,40,5);
	fill(95,95,95);
	rect(385,509,45,5);
	fill(91,91,91);
	rect(382,514,50,5);
	
	//shadow of side building//
	fill(166, 72, 51);
	rect(84,340,145,180);
	//shadow of side building roof//
	fill(89,89,89);
	triangle(85, 340, 170, 288, 230, 341);
	square(146,288,25);
	
	//side building//
	fill(191, 90, 54);
	rect(84,340,130,180);
	//side building roof//
	fill(191,191,191);
	triangle(85, 340, 149, 288, 213, 341);
	
	//far left small square window//
	fill(191, 90, 54);
	rect(130,310,40,31);
	triangle(130, 310, 149, 293, 171, 310);
	//side pillars//
	fill(191, 106, 75);
	rect(125,310,5,31);
	rect(170,310,5,31);
	fill(255,255,255);
	triangle(125, 310, 128, 305, 130, 310);
	triangle(170, 310, 172, 305, 175, 310);
	triangle(146, 293, 148, 280, 152, 293);
	
	//left smaller square windows//
	fill(191, 90, 54);
	rect(260,310,40,30);
	triangle(260, 310, 280, 293, 300, 310);
	//side pillars//
	fill(191, 106, 75);
	rect(255,310,5,30);
	rect(300,310,5,30);
	fill(255,255,255);
	triangle(255, 310, 258, 305, 260, 310);
	triangle(300, 310, 302, 305, 305, 310);
	triangle(277, 293, 280, 280, 283, 293);
	
	//right smaller square windows//
	fill(191, 90, 54);
	rect(540,310,40,30);
	triangle(540, 310, 560, 293, 580, 310);
	//side pillars//
	fill(191, 106, 75);
	rect(535,310,5,30);
	rect(580,310,5,30);
	fill(255,255,255);
	triangle(535, 310, 538, 305, 540, 310);
	triangle(580, 310, 583, 305, 585, 310);
	triangle(557, 293, 560, 280, 563, 293);
	
	
	//trim shadow//
	fill(227,197,166);
	rect(168,340,61,10);
	//trim//
	fill(255,232,199);
	rect(84,340,46,10);
	rect(168,340,46,10);
	rect(229,340,35,10);
	rect(297,340,43,10);
	rect(475,340,70,10);
	rect(574,340,111,10);
	
	//windows//
	//far left//
	fill(220,228,241);
	circle(150,316,20,20);
	square(140,316,20);
	//////////////////
	rect(105,373,10,25);
	rect(148,373,10,25);
	rect(188,373,10,25);
	rect(105,450,10,25);
	rect(148,450,10,25);
	rect(188,450,10,25);
	
	//left//
	circle(270, 316, 10);
	rect(265,316,10,20);
	circle(290, 316, 10);
	rect(285, 316, 10,20);
	//////////////////
	rect(247,373,10,25);
	rect(280,373,10,25);
	rect(316,373,10,25);
	rect(247,450,10,25);
	rect(280,450,10,25);
	rect(316,450,10,25);

	//right//
	circle(549, 316, 10);
	rect(544,316,10,20);
	circle(570, 316, 10);
	rect(565, 316, 10,20);
	////////////////////
	rect(505,373,10,25);
	rect(562,373,10,25);
	rect(617,373,10,25);
	rect(660,373,10,25);
	rect(505,450,10,25);
	rect(562,450,10,25);
	rect(617,450,10,25);
	rect(660,450,10,25);
	
	//middle//
	circle(400, 320, 10);
	rect(395,320,10,20);
	circle(415, 320, 10);
	rect(410,320,10,20);
	square(410, 300, 10);
	square(395, 300, 10);
	rect(395,365,10,25);
	rect(410,365,10,25);
	
	
	//tree1//
	
	//trunk//
	fill(140,101,66);
	triangle(58, 528, 83, 301, 122, 528);
	//leaves//
	fill(148,191,54);
	circle(45,339, 60,60);
	circle(84,308, 60,60);
	circle(80,348, 60,60);
	circle(116,366, 60,60);
	circle(118,324, 60,60);
	circle(61,389, 60,60);
	
	//tree2//
	//trunk//
	fill(140,101,66);
	triangle(678, 528, 707, 284, 724, 528);
	
	fill(148,191,54);
	circle(45,339, 60,60);
	circle(733,322, 60,60);
	circle(685,294, 60,60);
	circle(682,344, 60,60);
	circle(721,353, 60,60);
	circle(718,290, 60,60);
	circle(717,366, 60,60);
	//////////////////
	
	click();
	
}


function createPlayer()
{
		//M hill//
	fill(130,140,50);
	circle(hillx, hilly, 900, 900);
}

function movement()
	{
		if(keyIsDown(w))
			{
				hilly -= 5;   
    		}
		if(keyIsDown(s))
			{
        		hilly += 5;   
			}
    	if(keyIsDown(a))
    		{
				hillx -= 5;   
			}
		if(keyIsDown(d))
			{
        		hillx += 5;   
    		}
	}
function mouseClicked()
{
	clickMx= mouseX;
	clickMy= mouseY
}

function click()
{
	textSize(50);
	fill(255,255,255);
	text("M",clickMx, clickMy,)
}

function getRandomNumber(number)
{
	return Math.floor(Math.random() * number) + 10;
}




