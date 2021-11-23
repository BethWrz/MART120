// JavaScript Document

//player variables//
var charx = 30;
var chary = 40;

//movement//
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//obstacle 1//
var circx =400;
var circy =588;
var circxspeed;
var circyspeed;

//obstacle 2//
var circ2x = 500;
var circ2y = 125;
var circ2xspeed;
var circ2yspeed;

//click//
var clickShapeX;
var clickShapeY;


function setup()
{
	createCanvas(750,750);
	player(100, 100);
	mouseClicked();
}


function draw() 
{
	background (241,233,245);
	
	createPlayer();
	
	movement();
	
	click();
	
	obstacle1();
	
	obstacle2();
	
	o1movement();
	
	o2movement();
	
	borders(10);
	
	displayExit();
	
//Exit//
if(charx>width && chary>width-760)
	{
		youWin();
	}
}

//functions//
function player(x, y)
{
	charx = x
	chary = y
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

function mouseClicked()
	{
		clickShapeX = mouseX;
		clickShapeY = mouseY;
	}

function click()
{
	//click//
	strokeWeight(0)
	fill(253,194,177);
	circle(clickShapeX,clickShapeY,25);	
}

function obstacle1()
{
	//obstacle 1//
strokeWeight(0)
fill(119,173,158)
	circle(circx,circy,50);
circxspeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+2);
circyspeed = Math.floor(Math.random()*(Math.floor(random()*5))+2);
	circx+=circxspeed;
	circx+=circyspeed;
}

function obstacle2()
{
	//obstacle 2//
strokeWeight(0)
fill(27,82,64)
	circle(circ2x, circ2y,50);
circ2xspeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))-2);
circ2yspeed = Math.floor(Math.random()*(Math.floor(random()*5))-2);
	circ2x+=circ2xspeed;
	circ2y+=circ2yspeed;
}

function o1movement()
{
	//infinity screen o1//
if(circx>width)
	{
	
	circx=0;

	}
if(circx<0)
	{
	circx=width;
	}
if(circy>height)
	{
	circy=0;
	}
if (circy<0)
	{
	circy=height;	
	}
}

function o2movement()
{
	//infinity screen o2//
	if(circ2x>width)
	{
	circ2x=0;
	}
if(circ2x<0)
	{
	circ2x=width;
	}
if(circ2y>height)
	{
	circy2=0;
	}
if (circ2y<0)
	{
	circ2y=height;	
	}
}

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

function youWin()
{
	fill(152,144,200);
	strokeWeight(3);
	textSize(45);
	text("You Win!!",300,345);
}





	


