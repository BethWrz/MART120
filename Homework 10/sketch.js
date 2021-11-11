// JavaScript Document
var x=100;
var y=100;

var headx= 250;
var heady= 150;
var headmove=1;

var Rearx = 335;
var Rearmove= 1;

var Learx=160;
var Learmove= 1;

var Larmy= 290;
var Larmmove= 1;

var Rarmy= 290;
var Rarmmove= 5;

var thetext= 20;
var textmove= 5;
var textcount= 0;

var wordx= 300;
var wordy= 500;

		function setup()
		{
		createCanvas (500,600);
		}

		function draw()
		{
		background(167,192,242);
		textSize(20);
	text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
			
			strokeWeight(0);
			fill(217,167,139);
			//right ear//
		ellipse(Rearx,145,70,60);
			Rearx += Rearmove;
			if (Rearx <=335 || Rearx>=440){
				Rearmove *=-1;
			}
			
			
			
			//left ear//
		ellipse(Learx,145,70,60);
			Learx -= Learmove;
			if (Learx<=55 || Learx>=160){
				Learmove *= -1
			}
			
			fill(38,21,15);
			//behind the head hair//
		rect(160,50,180,100);
		rect(160,170,180,100);
			
			fill(242,196,155);
       	
			//head//
		circle(headx, heady, 200);
			heady+=headmove;
			headx+=headmove;
			if (headx>=435 || headx <=250) {
				headmove *=-1;
			}
			//neck//
		rect(170,150,150,200);
			
			fill(217,167,139);
			//nose//
		triangle(230,200,248,180,240,140);
			
			//white//
			fill(255,255,255);
			//right eye//
		circle(295,150,34);
			//left eye//
		circle(195,150,34);
			
			fill(38,21,15);
			//right eye color//
		circle(295,150,15);
			//left eye color//
		circle(195,150,15);
			//front bangs//
		rect(188,50,155,60);
		rect(155,50,33,60);
			rect(155,100,33,60);
			rect(155,75,33,60);
		rect(300,50,45,60);
			rect(300,100,45,60);
			
			
			fill(0,0,0)
			//pupil//
		circle(295,150,5);
		circle(195,150,5);
			
			fill(140,89,59)
			//right eye gleam//
		circle(300,145,5);
			//left eye gleam//
		circle(190,145,5);
			
			fill(70,94,115)
			//right pants leg//
		rect(230,410,100,200);
			//left pants leg//
		rect(180,410,100,200);

			fill(115,2,12);
			//shirt//
		square(150,270,200);
			
		//Left Arm//	
		rect(100,Larmy,100,200);
			Larmy+=Larmmove
			if (Larmy>= 400 || Larmy<= 290) {
				Larmmove *= -1;
			}
			
			
		//Right Arm//
		rect(300,Rarmy,100,200);	
			Rarmy+=Rarmmove
			if (Rarmy>= 400 || Rarmy<= 290) {
				Rarmmove *= -1;
				}
			Rarmy+= Rarmmove;
			
			strokeWeight(3);
			//shirt stripes//
			line(100, 300, 400, 300);
			line(100, 350, 400, 350);
			line(100, 400, 400, 400);
			line(100, 450, 400, 450);
			
			//shoes//
			point(210, 600);
			point(300, 600);
			
		text('Coded by Beth Wrzesinski', wordx, wordy);
		
				textSize(thetext);
			thetext+= textmove;
			textcount++;
			if(textcount> 5)
			   {
				textmove *=-1;
			   textcount=0;
			}
			text('Self Portrait of Me (Beth)!', 100, 25);
			
		
			
			
			
			
		}
