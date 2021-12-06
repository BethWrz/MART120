// JavaScript Document

//player//
var charx = 30;
var chary = 40;

//movement//
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y//
var circX = 400;
var circY = 588;

var circXs = [];
var circYs = [];
var diameters = [];

var circXspeed = [];
var circYspeed = [];

//click//
var clickShapeX;
var clickShapeY;
///////////////////////

function setup()
{
createCanvas(750,750);
	
	//random speed//
	for (var i = 0; i < 50; i++) 
	{
        circXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circXs[i] = getRandomNumber(500);
        circYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
	}
	
	player(60,100);
	
	mouseClicked();
}

function draw()
{
	background (241,233,245);
	
	borders(10);
	
	displayExit();
	
	//Exit//
if(charx>width && chary>width-760)
	{
		youWin();
	}
	
	createPlayer();
	movement();
	

	 // potential enemy
    fill(119,173,158);
    // draw the shape
    for (var i = 0; i < circXs.length; i++) 
	{
        circle(circXs[i], circYs[i], diameters[i]);
        circXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        circXs[i] += circXspeed[i];
        circYs[i] += circYspeed[i];
		
        // check to see if the shape has gone out of bounds
        if (circXs[i] > width) {
            circXs[i] = 0;
        }
        if (circXs[i] < 0) {
            circXs[i] = width;
        }
        if (circYs[i] > height) {
            circYs[i] = 0;
        }
        if (circYs[i] < 0) {
            circYs[i] = height;
		}
	}
	
	youwin();
	
	click();
}
///////////////////////////

function borders(thickness)
{
	//border characteristics//	
	strokeWeight(0);
	fill(201,200,224);
	//top border//
	rect(0,0,width,thickness);
	//bottom border//
	rect(0, height-thickness,width, thickness);
	//left border//
	rect(0,0,thickness,height);
	//right border//
	rect(width-thickness,0,thickness,height-80);
}

function displayExit()
{
	//exit sign//
	fill(111,129,166);
	textSize(25);
	text("EXIT", 690,710);
}

function player(x, y)
{
	charx = x;
	chary = y;
}

function createPlayer()
{
	//player//
	strokeWeight(1);
	fill(248,221,212);
	square(charx,chary,50);
}

function movement()
{
	//movement//
	if(keyIsDown(w))
    {
        chary -= 5;   
    }
    if(keyIsDown(s))
    {
        chary += 5;   
    }
    if(keyIsDown(a))
    {
        charx -= 5;   
    }
    if(keyIsDown(d))
    {
        charx += 5;   
    }
}

function youWin()
{
	fill(152,144,200);
	strokeWeight(3);
	textSize(45);
	text("You Win!!",300,345);
}

function mouseClicked()
	{
		clickShapeX = mouseX;
		clickShapeY = mouseY;
	}

function click()
{
	//click//
	strokeWeight(0);
	fill(253,194,177);
	circle(clickShapeX,clickShapeY,25);	
}

function getRandomNumber(number) 
	{
		return Math.floor(Math.random() * number) + 10;
	}


