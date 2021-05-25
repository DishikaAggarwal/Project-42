var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(700,700);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

  //To use angle in Degrees
  angleMode(DEGREES);

//Calculating time using predefined func from p5.js
hr=hour();
text('Current hour:\n' + hr, 5, 100);

mn=minute();
text('Current minute: \n' + mn, 5, 50);

sc=second();
text('Current second: \n' + sc, 5, 150);
scAngle=map(sc,0,60,0,360);

textSize(70);
textFont("Monotype Corsiva")

//current time in text
stroke("blue");
strokeWeight("7");
fill("purple");
text(hr+":",220,550);

stroke("red");
strokeWeight("7");
fill("pink");
text(mn+":",300,550);

stroke("orange");
strokeWeight("7");
fill("yellow");
text(sc,380,550);

//quarter setting for clock

textSize(30);

stroke("blue")
fill("white");
text("12", 340,120);

stroke("blue")
fill("white");
text("3", 478,255);

stroke("blue")
fill("white");
text("9", 188,255);

stroke("blue")
fill("white");
text("6", 343,400);

//Translation and rotation 
translate(350,250)
rotate(-90)

//To create ab iterative rotation
strokeWeight(8);
stroke(255, 150, 235);
noFill();
scAngle = map(sc, 0, 60, 0, 360);
strokeWeight(8);
stroke(154, 234, 101);
mnAngle = map(mn,0,60,0,360);
strokeWeight(8);
stroke(137, 96, 253);
hrAngle = map(hr % 12,0,12,0,360);

//drawing seconds hand
push();
rotate(scAngle); 
stroke(255,0,0);
strokeWeight(5);
line(0,0,130,0);
pop()

//drawing minutes hand
push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,115,0);
pop()

//drawing hour hand
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(9);
line(0,0,75,0);
pop()

//drawing arcs
strokeWeight(5);

//seconds
strokeWeight(5);
stroke(255,0,0);
arc(0,0,400,400,0,scAngle);
//Minutes
strokeWeight(7);
stroke(0,255,0);
arc(0,0,370,370,0,mnAngle);
//Hour
strokeWeight(9);
stroke(0,0,255);
arc(0,0,340,340,0,hrAngle);

  drawSprites();
}